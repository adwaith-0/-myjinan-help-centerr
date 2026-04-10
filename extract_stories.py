import os
import sys

# Add directory to sys.path to import build_user_stories
sys.path.append(r"c:\Users\adwai\OneDrive\Desktop\docu")
try:
    from build_user_stories import stories, MODULE_COLORS
except ImportError as e:
    print("Error importing:", e)
    sys.exit(1)

out_file = r"c:\Users\adwai\OneDrive\Desktop\docu\website\src\lib\user-stories-data.ts"

with open(out_file, "w", encoding="utf-8") as f:
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

print(f"Generated {out_file}")
