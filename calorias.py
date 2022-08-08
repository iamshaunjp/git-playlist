#Segun Harris Benedict, las calorias necesarias para:

#Una mujer son : 655 + (9.6 * peso en kg) + |(1.8 * altura en cms)
# - (4.7 * edad)| * (Factor actividad)

#Un varon son : 66 + (13.7 * peso en kg) + |(5 * altura en cms)
# - (6.8 * edad)| * (Factor actividad)

#Donde factor actividad:
# 1.2 --> personas sedentarias
# 1.375 --> 1 a 3 dias semanales de ejercicio
# 1.55 --> 3 a 5 dias semanales de ejercicio
# 1.725 --> 6 a 7 dias semanales de ejercicio
# 1.9 --> mas de 4hs diarias de ejercicio

print("Factor actividad")
print ("1.2 --> personas sedentarias")
print ("1.375 --> 1 a 3 dias semanales de ejercicio")
print ("1.55 --> 3 a 5 dias semanales de ejercicio")
print  ("1.725 --> 6 a 7 dias semanales de ejercicio")
print (" 1.9 --> mas de 4hs diarias de ejercicio")
print("")
def formulaM(peso, altura, edad, actividad):
    ecuacionM = 66 + (13.7 * float(peso)) + abs((5*float(altura)) - (6.8* float(edad))) * float(actividad)
    print("Las calorias promedio que deberia conseguir diariamente son", ecuacionM)

def formulaF(peso, altura, edad, actividad):
    ecuacionF = 655 + (9.6 * float(peso)) + abs((1.8*float(altura)) - (4.7* float(edad))) * float(actividad)
    print("Las calorias promedio que deberia conseguir diariamente son", ecuacionF)
    
def calorias (sexo, peso, altura, edad, actividad):
    if float(sexo)== 1:
        formulaM(peso,altura,edad,actividad)
    if float(sexo) == 2:
        formulaF(peso,altura,edad,actividad)
    else:
        print("Ingresar un sexo valido")
        


sexo = input("1 si masculino, 2 si femenino: ")

peso = input("Peso en kg: ")

altura = input("Altura en cms: ")

edad = input("Edad: ")

actividad = input("Actividad: ")

calorias (sexo, peso, altura, edad, actividad)
