from time import sleep

EASY = """xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

MEDIUM = """xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
x-----x-----------------------x---x-------x-x-----------------x
xxxxx-x-xxxxxxxxx-x-xxxxxxx-xxx-x-x-x-xxx-x-x-xxx-xxxxxxxxxxx-x
x---x-x-x-------x-x-----x---x---x---x-x---x-x---x-----------x-x
x-x-x-x-x-xxxxx-xxxxxxx-xxxxx-xxxxxxx-x-xxx-xxx-xxxxxxx-xxx-xxx
x-x---x-x-----x---x---x---x-----x---x-x-x---------x---x---x---x
x-xxxxxxx-xxx-xxx-x-x-xxx-x-xxxxx-x-x-x-xxxxxxxxxxx-x-xxx-xxx-x
x-x-----x-x---x---x-x---x-x-x---x-x---x-----x-------x---x-x-x-x
x-xxx-x-xxx-xxx-xxx-xxx-x-x-x-x-x-xxxxxxxxx-x-xxxxxxxxx-x-x-x-x
x-----x-----x-x-x---x---x---x-x---x-------x-x-x---x-----x---x-x
xxxxxxxxxxxxx-x-x-x-xxx-xxx-x-xxxxx-xxxxx-x-x-x-x-x-xxxxxxxxx-x
x---x-----x-x---x-x---x---x-x-x-----x-----x-x-x-x-x-x---------x
x-xxx-x-x-x-x-xxx-xxx-xxx-xxx-x-xxxxx-xxxxx-x-x-xxx-xxxxx-xxx-x
x-----x-x---x-x-----x---x-----x---x-x-x---x---x---x---x---x---x
x-xxxxx-xxx-x-x-xxxxxxx-xxxxxxx-x-x-x-xxx-xxxxxxx-xxx-x-xxx-xxx
x-x-x---x---x-x---x-----x---x---x-x-x-------------x---x-x---x-x
x-x-x-x-xxxxx-xxx-x-xxxxx-xxx-xxx-x-xxx-xxxxxxxxxxx-xxx-x-xxx-x
x---x-x-x-----x---x-----x---x---x-x-----x-------x---x---x-----x
x-xxx-x-x-xxxxxxx-xxxxx-xxx-xxx-x-xxx-xxx-xxxxx-x-xxxxx-xxxxx-x
x-x---x-x-------x-----x---x---x-x---x---x-x-x---x-x-----x-x---x
x-x-xxx-xxxxxxx-xxxxxxx-x-x-xxx-xxx-xxxxx-x-x-xxx-x-xxxxx-x-xxx
x-x-x-x---x---x---x---x-x-x---x-x-x-----x-x-x-x---x---x---x---x
x-x-x-xxx-x-xxxxx-x-x-x-x-xxx-x-x-xxxxx-x-x-x-x-xxxxx-x-xxxxx-x
x-x-x-----x-x---x-x-x-x-x---x-x-x-----x---x-x---x-----x---x---x
x-x-xxx-xxx-x-x-x-x-x-x-xxx-x-x-xxxxx-xxxxx-xxxxx-x-xxx-x-x-xxx
x-x---x-----x-x---x-x-x---x-x---------------x---x-x---x-x-x-x-x
x-xxx-xxxxxxx-xxxxx-x-xxxxx-xxxxxxxxxxxxxxx-x-x-xxxxx-x-x-x-x-x
x---x---x---x-x-----x-x---x---x-x-----x---x---x-x---x-x-x---x-x
xxx-xxx-x-x-x-x-xxxxx-x-x-xxx-x-x-xxx-x-x-xxxxx-x-x-x-x-xxxxx-x
x-----x---x-----x-------x-----x-----x---x---------x---x------ox
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"""

HARD = """xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
x-x---------x-----------x---------------------x-----x-----------------x---x---------x
x-xxx-xxxxx-x-xxxxxxx-x-x-xxxxx-xxxxxxx-xxxxx-x-xxx-xxx-xxxxxxx-xxxxx-x-xxx-xxxxx-x-x
x-x---x-----x---x---x-x---x-----x-----x-x---x---x-x---x---x---x-x-----x-----x---x-x-x
x-x-xxx-xxxxxxxxx-x-x-xxxxx-xxxxx-xxx-x-x-x-xxxxx-xxx-xxx-x-x-x-xxxxx-xxxxxxx-x-x-x-x
x-x---x-----------x-x---x-x-x---x-x-x-x-x-x-x-------x-x---x-x-x-----x---------x---x-x
x-xxx-xxxxxxxxxxxxx-x-x-x-x-xxx-x-x-x-xxx-x-x-xxxxx-x-x-xxx-x-xxxxx-xxxxxxxxxxxxxxx-x
x-----x-----x-------x-x-x---x---x---x-x---x-x-----x---x-x---x-----x---x---x---x-----x
xxxxxxx-x-xxx-xxxxxxxxx-xxx-x-x-xxx-x-x-xxx-xxxxx-xxxxx-xxx-xxxxx-xxx-x-x-xxx-x-xxxxx
x-----x-x-----x-------x---x---x---x-x---x---x---x---x-x-----x-------x---x---x-----x-x
x-xxx-x-xxxxxxxxxxx-x-xxx-xxxxxxx-x-xxxxx-xxxxx-xxx-x-xxx-xxxxxxxxxxxxxxxxx-xxxxx-x-x
x-x---x-x---x-------x---x-x-----x-x-----x-x-------x-x-----x---------------x-----x-x-x
x-xxx-x-x-x-x-xxxxxxxxx-x-x-xxx-xxxxxxx-x-x-xxxxxxx-xxxxxxx-xxxxxxxxxxxxx-xxxxx-x-x-x
x---x-x---x---x---------x-----x-----x---x-x---------x-------x-----------x-x-----x-x-x
xxx-x-xxxxxxxxx-xxxxxxxxxxxxxxx-x-xxx-xxx-x-xxxxxxxxx-xxxxxxx-xxxxx-xxxxx-x-xxxxx-x-x
x---x-x---x---x-----x---------x-x-------x-x---------x---x---x-x-x---x---x---x---x---x
x-xxx-xxx-x-x-xxxxx-x-x-xxxxx-xxx-xxxxxxx-xxxxxxxxx-x-x-x-x-x-x-x-xxx-x-xxxxx-xxxxx-x
x---x-----x-x---x---x-x---x-----x-x-----x-x---------x-x---x-x-x---x---x---x-------x-x
x-x-xxx-xxx-x-xxx-xxxxx-x-xxxxx-xxx-xxx-x-xxxxxxx-xxxxxxxxx-x-xxxxx-xxxxx-x-xxxxx-x-x
x-x-x---x---x-----x---x-x-----x-----x---x-------x-----------x-x-----x---x-x-x-----x-x
x-x-xxxxx-xxxxxxxxx-x-xxxxxxx-xxxxxxx-xxxxxxxxx-xxxxxxxxxxxxx-x-xxxxx-x-x-x-x-xxx-x-x
x-x-x-----x-------x-x---------x-----x---------x-x---------x---x-x-----x-x---x-x---x-x
xxx-x-xxxxx-xxxxx-x-xxxxxxxxxxxxxxx-xxxxxxxxx-x-x-xxxxxxx-x-x-x-x-xxx-x-xxxxx-xxxxx-x
x---x-------x-----x-x-x---------------x-------x---x-----x-x-x-x-x-x-x-x-----x-x-----x
x-xxxxxxxxxxx-xxxxx-x-x-xxxxxxx-xxxxxxx-xxxxxxx-xxx-xxx-x-x-x-x-x-x-x-xxxxx-x-x-xxxxx
x-----x-------x-----x-x-x-----x-x-----x---x-----x---x---x-x-x-x-x---x---x---x-x-x---x
xxxxx-x-xxxxxxxxx-xxx-x-x-x-xxx-x-xxx-xxx-x-xxxxx-xxx-xxx-x-x-x-xxx-xxx-xxxxx-x-x-x-x
x-----x-x---------x-----x-x---x---x-x-----x-x---x-x-x-x---x-x-x---x---x-x-----x-x-x-x
x-xxxxx-x-xxxxxxxxx-xxxxxxxxx-xxxxx-xxxxxxxxx-x-x-x-x-xxx-x-x-xxx-xxxxx-x-xxxxx-xxx-x
x-x-----x---x-x-----x---------x-x-------------x---x-x---x-x-x-----------x-----x-----x
x-x-xxxxx-x-x-x-xxxxx-xxxxxxx-x-x-xxxxx-xxxxxxxxxxx-xxx-x-xxxxxxx-xxxxx-xxxxx-xxxxx-x
x---x---x-x-x-----x---x---x---x---x-----x-------x-----x-x---x---x-x---x-x-x---x-----x
x-xxx-x-x-x-xxxxx-xxx-x-x-x-xxxxx-x-xxxxxxx-x-x-xxxxx-x-x-x-x-x-x-x-x-x-x-x-xxx-xxxxx
x---x-x---x---x-x---x-x-x-x-x---x-x-------x-x-x-------x-x-x---x-x-x-x-x---x---x-x---x
xxx-xxxxxxxxx-x-xxx-x-xxx-x-x-x-xxx-xxxxx-xxx-xxxxxxxxx-xxxxxxx-xxx-x-xxx-xxx-x-x-xxx
x-x-x---------x---x-x-x---x---x---x-x---x---x-x-------x-------x-----x-x-x-x-x---x---x
x-x-x-xxxxxxxxx-xxx-x-x-xxxxxxxxx-xxx-x-x-x-x-x-xxxxx-xxxxxxx-x-xxxxx-x-x-x-xxxxxxx-x
x---x-----x-------x---x-x-----x-x-----x-x-x-x---x---x---x-----x-----x-x-x-x---------x
x-xxxxx-x-xxxxxxx-xxxxx-x-x-x-x-xxxxxxx-xxx-x-xxx-x-x-xxx-xxxxxxxxx-x-x-x-xxx-xxxxx-x
x-----x-x-----x---x---x---x-x-----x-----x---x-----x-x---x-x-----x---x-x-x-----x-x---x
xxxxx-xxxxxxx-x-xxx-x-x-xxx-xxxxxxx-xxxxx-xxxxxxxxx-xxx-x-xxx-x-xxxxx-x-xxxxxxx-x-xxx
x-------------x-----x-----x---------------x-----------x-------x-------x------------ox
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"""

def load_from_file(data):
    map = []
    for line in data.splitlines():
        map.append(list(line.rstrip()))
    for i, row in enumerate(map):
        for j, char in enumerate(row):
            if char == "-":
                return map, i, j
    return None, -1, -1


def _use_map(data):
    global map, PosY, PosX, path
    map, PosY, PosX = load_from_file(data)
    path = []
    if map is None:
        print("No possible starting point found.")
        return
    print(PosY, PosX)
    print(map)


def print_map():
    _use_map(EASY)


def print_medium_map():
    _use_map(MEDIUM)


def print_hard_map():
    _use_map(HARD)


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
    while map[PosY][PosX] != "o" and compteur < 1500:
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
