def getLine(ligne: list) -> list:
    print("getLine called")
    result = []
    for c in ligne:
        if type(c) == int and c not in result:
            result.append(c)
    return result


def getColumn(sudoku: list, index: int) -> list:
    print("getColumn called")
    result = []
    for ligne in sudoku:
        c = ligne[index]
        if type(c) == int and c not in result:
            result.append(c)
    return result


def getBlock(sudoku: list, x: int, y: int) -> list:
    print("getBlock called")
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


__FACILE = [
    [5, 3, 0, 6, 0, 0, 9, 0, 2],
    [0, 0, 0, 1, 9, 5, 3, 0, 8],
    [0, 0, 8, 0, 0, 0, 5, 0, 7],
    [8, 5, 0, 0, 6, 1, 4, 2, 0],
    [0, 2, 0, 0, 0, 3, 0, 9, 0],
    [0, 1, 0, 9, 2, 0, 8, 0, 6],
    [9, 6, 0, 5, 0, 0, 2, 0, 4],
    [2, 8, 7, 4, 0, 0, 0, 0, 0],
    [3, 4, 5, 2, 0, 0, 0, 7, 0],
]

__MOYEN = [
    [0, 0, 0, 6, 7, 0, 9, 1, 2],
    [6, 0, 2, 1, 0, 5, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 7, 0, 0, 0, 0, 3],
    [4, 2, 0, 0, 5, 3, 0, 0, 0],
    [0, 1, 0, 0, 0, 4, 0, 5, 6],
    [0, 6, 0, 0, 3, 0, 2, 0, 4],
    [0, 8, 0, 4, 1, 9, 0, 3, 0],
    [3, 0, 0, 2, 0, 0, 0, 7, 0],
]

__DIFFICILE = [
    [5, 3, 0, 0, 0, 0, 0, 0, 2],
    [6, 7, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 9, 7, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 5, 0, 7, 0, 0],
    [0, 0, 3, 0, 2, 4, 0, 0, 0],
    [0, 6, 0, 0, 0, 7, 2, 0, 0],
    [0, 0, 0, 0, 1, 0, 6, 3, 5],
    [0, 0, 5, 2, 8, 0, 1, 7, 0],
]


def _charger(board: list, niveau: str) -> list:
    print(f"DIFFICULTE {niveau}")
    return [row[:] for row in board]


def charger_facile() -> list:
    return _charger(__FACILE, "facile")


def charger_moyen() -> list:
    return _charger(__MOYEN, "moyen")


def charger_difficile() -> list:
    return _charger(__DIFFICILE, "difficile")


def afficher(grille: list) -> None:
    print("--- TOUR ---")
    for ligne in grille:
        print(" ".join(str(c) if type(c) == int else "0" for c in ligne))
