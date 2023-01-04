import openpyxl

file = openpyxl.load_workbook('/Users/ridham._1402/Desktop/dev/bits-and-pses/backend/Scrape/HuelData.xlsx')
sheet = file['Huels']
rows = sheet.max_row

list = []

for row in range(3, rows+1):
    dict = {}
    if(sheet['B'+str(row)].value!=None):
        dict['CourseID'] = sheet['B'+str(row)].value
        dict['CourseName'] = sheet['C'+str(row)].value
        dict['Units'] = sheet['F'+str(row)].value
        dict['IC_name'] = sheet['H'+str(row)].value
        list.append(dict)

print(list)