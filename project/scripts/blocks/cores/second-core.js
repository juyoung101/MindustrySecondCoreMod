const secondCore = extend(CoreBlock, "second-core", {{
requirements(Category.effect, BuildVisibility.shown, with(Items.copper, 1000, Items.lead, 800));
            alwaysUnlocked = true;

            unitType = UnitTypes.alpha;
            health = 1100;
            itemCapacity = 3000;
            size = 3;

            unitCapModifier = 8;
}});
