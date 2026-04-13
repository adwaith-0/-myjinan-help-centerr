import os
import sys
import json

# Add directory to sys.path to import build_user_stories
sys.path.append(r"c:\Users\adwai\OneDrive\Desktop\docu")
try:
    from build_user_stories import stories, MODULE_COLORS
except ImportError as e:
    print("Error importing:", e)
    sys.exit(1)

# ── Generate .ts file (type definitions + data) ─────────────────────────────
out_ts = r"c:\Users\adwai\OneDrive\Desktop\docu\website\src\lib\user-stories-data.ts"

with open(out_ts, "w", encoding="utf-8") as f:
    f.write('export interface UserStory {\n')
    f.write('  id: string;\n')
    f.write('  module: string;\n')
    f.write('  subModule: string;\n')
    f.write('  feature: string;\n')
    f.write('  outcome: string;\n')
    f.write('  grouping: string;\n')
    f.write('  custom: string;\n')
    f.write('  setupComments: string;\n')
    f.write('  status: string;\n')
    f.write('}\n\n')

    f.write('export const MODULE_COLORS: Record<string, string> = {\n')
    for mod, color in MODULE_COLORS.items():
        f.write(f'  "{mod}": "#{color}",\n')
    f.write('};\n\n')

    f.write('export const USER_STORIES: UserStory[] = [\n')
    for s in stories:
        module, submod, ref, feature, outcome, grouping, custom, setup_cmt, status = s
        f.write('  {\n')
        f.write(f'    id: {repr(ref)},\n')
        f.write(f'    module: {repr(module)},\n')
        f.write(f'    subModule: {repr(submod)},\n')
        f.write(f'    feature: {repr(feature)},\n')
        f.write(f'    outcome: {repr(outcome)},\n')
        f.write(f'    grouping: {repr(grouping)},\n')
        f.write(f'    custom: {repr(custom)},\n')
        f.write(f'    setupComments: {repr(setup_cmt)},\n')
        f.write(f'    status: {repr(status)},\n')
        f.write('  },\n')
    f.write('];\n')

print(f"Generated {out_ts}")

# ── Generate .json file (consumed by UserStoriesPanel.tsx) ──────────────────
out_json = r"c:\Users\adwai\OneDrive\Desktop\docu\website\src\lib\user-stories-data.json"

# Read the existing JSON to preserve any fields not in build_user_stories
# (e.g. verificationStatus, userComments). Build a lookup by id.
existing_by_id = {}
if os.path.exists(out_json):
    try:
        with open(out_json, encoding="utf-8") as f:
            existing_records = json.load(f)
        existing_by_id = {r["id"]: r for r in existing_records if isinstance(r, dict) and "id" in r}
    except Exception:
        pass

records = []
for idx, s in enumerate(stories, 1):
    module, submod, ref, feature, outcome, grouping, custom, setup_cmt, status = s
    existing = existing_by_id.get(ref, {})
    record = {
        "id": idx,
        "ref": ref,
        "module": module,
        "subModule": submod,
        "feature": feature,
        "outcome": outcome,
        "grouping": grouping,
        "businessSolution": grouping,
        "custom": custom,
        "setupComments": setup_cmt,
        "status": existing.get("status", "Open"),
        "verificationStatus": existing.get("verificationStatus", "Not Working"),
        "userComments": existing.get("userComments", ""),
        "navigation": existing.get("navigation", existing.get("navigationPath", "")),
        "navigationPath": existing.get("navigationPath", ""),
        "trainingLink": existing.get("trainingLink", ""),
        "rowNumber": idx,
    }
    records.append(record)

with open(out_json, "w", encoding="utf-8") as f:
    json.dump(records, f, ensure_ascii=False, indent=2)

print(f"Generated {out_json} ({len(records)} stories)")

