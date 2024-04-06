import { Weapon } from './weapon';

export interface Unit {
  id: number;
  name: string;
  faction: string;
  move: number;
  toughness: number;
  wounds: number;
  points: number;
  runemarks: string[];
  weapons: Weapon[];
}
