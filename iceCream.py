week = 0
for j in range(1, 8):
    no_of_icecreams = int(input(f"Day {j} ! How many icecreams you want\n"))
    price_listof_icecream = []
    for i in range(no_of_icecreams):
        x = int(input("Give the price of icecream here : "))
        price_listof_icecream.append(x)
    for total in price_listof_icecream:
        week = week+total
print(f"The bill for a week is {week}")
