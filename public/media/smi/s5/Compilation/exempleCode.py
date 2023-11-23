# -*- coding: utf-8 -*-
"""
Created on Thu Nov  9 09:16:36 2023

@author: PRO
"""



LR=[["S","id","=","E","op","E"],["E","id"],["op","E"],["E","nbr"],["op","+"]]
def getRule(SymNonTer,SymTer):
    if SymNonTer=="S" and SymTer=="id":
        return LR[0]
    if SymNonTer=="E" and SymTer=="id":
        return LR[1]
    if SymNonTer=="E" and SymTer=="nbr":
        return LR[3]
    if SymNonTer=="op" and SymTer=="+":
        return LR[4]
    if SymNonTer=="E" and SymTer=="+":
        return LR[2]
    return []

def analyseurLexical(Instruction):
    return ["id","=","id","op","id","$"]
    return False

def analyseurSyntaxique():
    Pile=["$","S"]
    #Entree=["id","=","id","op","id","$"]# qui représente X=Y+Z ok
    Entree=["id","=","id","id","$"]# qui représente X=Y+Z ok
    while len(Pile)!=0:
            R=getRule(Pile[-1],Entree[0])
            if R==[]:
                return False
            Pile=Pile[:-1]+R[::-1][:-1]
            while Pile[-1]==Entree[0]:
                Pile=Pile[:-1]
                Entree=Entree[1:]
                if Pile==Entree==[]:
                    return True 
            if Pile==[] and Entree!=[]:
                return False
            if Pile!=[] and Entree==[]:
                return False
            if Pile==Entree==[]:
                return True
                
        
    
    
    