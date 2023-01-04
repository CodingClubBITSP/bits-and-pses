import openpyxl, json

file = openpyxl.load_workbook('/Users/ridham._1402/Desktop/dev/bits-and-pses/backend/Scrape/HuelData.xlsx')
sheet = file['Huels']
rows = sheet.max_row

list = []
hueldict = {}    

for row in range(3, rows+1):
    dict = {}
    if(sheet['B'+str(row)].value!=None):
        dict['Title'] = sheet['C'+str(row)].value
        dict['Units'] = sheet['F'+str(row)].value
        dict['IC'] = sheet['H'+str(row)].value
        dict['CourseID'] = sheet['B'+str(row)].value
        hueldict[row] = dict

json_obj = json.dumps(hueldict, indent=4)


with open('/Users/ridham._1402/Desktop/dev/bits-and-pses/backend/Scrape/HuelData.json', 'w') as outfile:
    outfile.write(json_obj)
