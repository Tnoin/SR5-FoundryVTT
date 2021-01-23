/// <reference path="../Shadowrun.ts" />
declare namespace Shadowrun {
    export type RollEvent = MouseEvent | { shiftKey?: boolean; altKey?: boolean };

    type ActorRollOptions = {
        event?: RollEvent
        title?: string
        hideRollMessage?: boolean
    };
    type DefenseRollOptions = ActorRollOptions & {
        fireModeDefense?: number;
        cover?: number | boolean;
        attack?: AttackData;
    };
    type SpellDefenseOptions = ActorRollOptions & {
        attack: AttackData
    }

    // Original attacks data (unmodified)
    type AttackData = {
        hits?: number;
        fireMode?: FireModeData;
        reach?: number;
        force?: number;
        level?: number;
        accuracy?: number;
        damage: DamageData;
        blast?: BlastData;
    };

    type CombatData = {
        initiative?: number
    }

    type ModifiedDamageData = {
        incoming: DamageData
        modified?: DamageData
    }

    type DrainData = LabelField & {
        value: number;
    }

    type SoakRollOptions = ActorRollOptions & {
        damage?: DamageData;
        attackerHits?: number;
        defenderHits?: number;
        netHits?: number;
    };

    type SkillRollOptions = ActorRollOptions & {
        attribute?: ActorAttribute
    };

    type SkillDialogOptions = {
        skill: SkillField
        attribute?: ActorAttribute
    }
}
