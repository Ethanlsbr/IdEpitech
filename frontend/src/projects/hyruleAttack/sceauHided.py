__USE = False


def getLine(ligne: list) -> list:
    global __USE
    __USE = True
    result = []
    for c in ligne:
        if type(c) == int and c not in result:
            result.append(c)
    return result


def getColumn(sudoku: list, index: int) -> list:
    global __USE
    __USE = True
    result = []
    for ligne in sudoku:
        c = ligne[index]
        if type(c) == int and c not in result:
            result.append(c)
    return result


def getBlock(sudoku: list, x: int, y: int) -> list:
    global __USE
    __USE = True
    result = []
    x = [0, 1, 2] if 0 <= x <= 2 else ([3, 4, 5] if 3 <= x <= 5 else [6, 7, 8])
    y = [0, 1, 2] if 0 <= y <= 2 else ([3, 4, 5] if 3 <= y <= 5 else [6, 7, 8])
    for i in range(9):
        if i not in x:
            continue
        for j in range(9):
            if j not in y:
                continue
            c = sudoku[i][j]
            if type(c) == int and c not in result:
                result.append(c)
    return result
