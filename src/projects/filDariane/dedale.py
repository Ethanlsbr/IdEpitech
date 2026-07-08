from time import sleep

MAP = """xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
x--------x--------x--------------------------------------------x
x--xxxx--x--xxxxxxx--xxxxxxxxxxxxxxxxxxxxxxxxxxxx--xxxxxxxxxx--x
x-----x-----x--------x-----x-----x--------------x-----x--------x
xxxx--x--xxxx--xxxxxxx--x--x--x--x--xxxxxxxxxx--xxxx--x--xxxxxxx
x-----x--x-----x--------x-----x--x--------x--x--x-----x-----x--x
x--xxxx--x--xxxx--xxxxxxxxxxxxxxxxxxx--xxxxxxx--xxxxxxxxxx--xxxx
x--x-----x--x--x--x--------------x--x--x-----x--------x--x-----x
x--xxxxxxx--xxxx--x--xxxxxxxxxx--x--x--x--x--xxxx--x--xxxxxxx--x
x--------x--x-----x-----x-----x--x--x-----x-----x--x-----------x
x--xxxx--x--x--xxxxxxx--xxxx--x--xxxxxxxxxxxxx--x--xxxxxxxxxxxxx
x--x-----x--x--------x-----x--x--------------x--x-----------x--x
x--x--xxxx--xxxxxxxxxxxxx--x--xxxxxxxxxxxxx--x--xxxx--xxxx--xxxx
x--x--x--------------------x--------------x--x-----x--x--x-----x
x--x--x--xxxxxxxxxxxxxxxxxxxxxx--xxxxxxx--xx-xxxx--x--x--xxxx--x
x--x--------x-----x--------------------x--x-----x--x-----x-----x
x--xxxxxxx--x--x--x--xxxx--xxxxxxx--xxxxxxx--x--x--xxxx--x--xxxx
x--x--------x--x--x-----x--------x--x--------x--x--x--x--x-----x
x--x--xxxxxxx--x--xxxx--x--xxxxxxxxxx--xxxxxxxxxx--x--x--xxxx--x
x--x--x--------x-----x--x-----x-----x-----------x--x-----x--x--x
x--x--x--xxxxxxxxxxxxx--xxxx--x--xxxxxxxxxxxxx--x--xxxxxxxxxx--x
x--x-----------------------x--x-----x--x--x----ox--------x--x--x
x--x--xxxxxxxxxxxxxxxxxxxxxxxxxxxx--xxxxxxx--xxxxxxxxxx--xxxx--x
x--x--------x-----x--x--------x--x--x--x--------------x--x-----x
xxxxxxxxxx--x--x--x--x--xxxx--xxxx--xxxx--xxxx--xxxxxxx--x--xxxx
x-----x-----x--x--x--x--x--x--------x--x--x-----x-----x--x-----x
x--xxxx--xxxx--x--x--x--xxxxxxxxxxxxxxxx--x--xxxx--x--x--xxxxxxx
x-----------x--x--x--x-----------------x--x--x-----x--x--------x
xxxxxxxxxx--xxxx--x--xxxxxxxxxxxxxxxx--x--x--xxxxxxxxxxxxxxxx--x
x-----------------x-----------------x-----x--------------x-----x
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"""


def load_from_file(data=MAP) -> tuple[list[list[str]], int, int]:
    map: list[list[str]] = []

    for line in data.splitlines():
        map.append(list(line.rstrip()))
    for i, row in enumerate(map):
        for j, char in enumerate(row):
            if char == "-":
                return map, i, j
    return None, -1, -1


map, PosY, PosX = load_from_file()

if map is None:
    print("No possible starting point found.")
    exit(1)


# Movement
def up():
    global map, PosY, PosX
    if PosY != 0 and map[PosY - 1][PosX] != "x":
        map[PosY][PosX] = "."
        PosY -= 1
        print("North")


def down():
    global map, PosY, PosX
    if PosY != len(map) - 1 and map[PosY + 1][PosX] != "x":
        map[PosY][PosX] = "."
        PosY += 1
        print("South")


def left():
    global map, PosY, PosX
    if PosX != 0 and map[PosY][PosX - 1] != "x":
        map[PosY][PosX] = "."
        PosX -= 1
        print("West")


def right():
    global map, PosY, PosX
    if PosX != len(map[PosY]) - 1 and map[PosY][PosX + 1] != "x":
        map[PosY][PosX] = "."
        PosX += 1
        print("East")


def finish():
    global map, PosY, PosX
    if map[PosY][PosX] == "o":
        print("PlayerOut")


def testVictory():
    compteur = 0
    while map[PosY][PosX] != "o" and compteur < 1000:
        compteur += 1
        if map[PosY][PosX + 1] in "-o":
            right()
            path.append("r")
        elif map[PosY][PosX - 1] in "-o":
            left()
            path.append("l")
        elif map[PosY + 1][PosX] in "-o":
            down()
            path.append("d")
        elif map[PosY - 1][PosX] in "-o":
            up()
            path.append("u")
        else:
            past = path.pop()
            if past == "u":
                down()
            if past == "d":
                up()
            if past == "r":
                left()
            if past == "l":
                right()
    finish()


path = []

print(PosY, PosX)
print(map)
