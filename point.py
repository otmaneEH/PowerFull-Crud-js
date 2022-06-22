from abc import ABC, abstractclassmethod

from pygame import Vector2
# class point
class point(ABC):

    def __init__(self):
        self.x = 0
        self.y = 0
    # function eq
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    @staticmethod
    def distance(p1, p2):
        return ((p1.x - p2.x)**2 + (p1.y - p2.y)**2)**0.5
    
class Vector(point):
    def __init__(self, p1, p2):
        super().__init__()
        self.p1 = p1
        self.p2 = p2
    # b
    def addition(self, v1, v2):
        return Vector(v1.p1 + v2.p1, v1.p2 + v2.p2)
    # c
    def difference(self, v1, v2):
        return Vector(v1.p1 - v2.p1, v1.p2 - v2.p2)
    # d
    def scalaire(self, v, s):
        return Vector(v.p1 * s, v.p2 * s)
    #e
    def affocher(self):
        print("x = ", self.p1, "y = ", self.p2)
    # g
    def is_orth(self, v):
        return self.p1 * v.p2 == self.p2 * v.p1
    #h
    def is_col(self, v):
        return self.p1 * v.p1 == self.p2 * v.p2
    
    