import pandas as pd
excel_file_path='/home/prakhar/Documents/HuelData.xlsx'
json_file_path='/home/prakhar/Documents/HuelData.json'
data =pd.read_excel(excel_file_path)
CourseID=data.CourseID
CourseName=data.CourseName
Units=data.Units
ICName=data.ICName
container={}
x=0
while x< len(CourseID):
    container[CourseID[x]]=[{"CourseName: ":CourseName[x]},{"Units: ":Units[x]},{"ICName: ":ICName[x]}]
    x=x+1
df=pd.DataFrame(container)
df.to_json(json_file_path)
