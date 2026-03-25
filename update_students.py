import re
import json

names = [
    "AAKASH MURALI NAIR", "ABEL SUNIL", "ABHIJITH K S", "ADITHYA KALARIKAL SAJKUMAR",
    "AFEEFA SHERIN T A", "AIVIN SIMON", "AKSHAYA M R", "ALBIN BABU", "ALOKA ANIL",
    "ANGEL MARIA DIAS", "ANITTA PALAMUTTAM THOMAS", "ANJALI K", "ANLY ANDERS",
    "ANNLIYA ROSE DAVID", "ANN MARIYA PAUL", "ANTONY JOHNSON", "ANUSYOOTH A S",
    "ARUN SHANKAR T K", "ASWIN K", "BHANUPRIYA", "C SANJANA MANOJ", "DARSANA C K",
    "DIYOSH BENNY K", "DURGA C K", "EDWIN SHAJAN", "FATHIMA SHILNA M", "HARI KRISHNAN",
    "INDRADATHAN K G", "JEROSH JAMES", "JOYAL JAIMY", "KRISHNENDU R", "K ROHITH",
    "MARIYAM ROSA BABU", "MERIN MARIA SUNNY", "M G MITHUN", "NANDITHA SREEKUMAR B T",
    "NIKHIL K", "NIRANJAN R", "PAVIN JOSHY ANDERSON", "PIYUSH K C", "RASHA HANNAN K V",
    "SAAHIL K LAZAR", "SACHIN SHIV K", "SIVAJYOTHIK M", "SOUMYA P V", "SREELAKSHMI K G",
    "SUJIL P U", "VISMAYA K", "YADHU KRISHNA M R", "DENIL DAVIS", "RONIT PAULSON",
    "SHERIN SAJAN", "SHREYA MARIYA T P", "SREELAKSHMI P N", "VIVEK P"
]

students = []
for i, name in enumerate(names):
    students.append(
        f'    {{ id: {i+1}, name: "{name}", tag: "Class of 2k26 🎓", votes: 0, img: "https://xsgames.co/randomusers/assets/avatars/pixel/{(i % 50) + 1}.jpg" }}'
    )

array_str = "const defaultStudents = [\n" + ",\n".join(students) + "\n];"

for filename in ["script.js", "admin.js"]:
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace defaultStudents array using regex
    new_content = re.sub(
        r"const defaultStudents = \[.*?\];",
        array_str,
        content,
        flags=re.DOTALL
    )
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(new_content)

print("Updated script.js and admin.js successfully.")
