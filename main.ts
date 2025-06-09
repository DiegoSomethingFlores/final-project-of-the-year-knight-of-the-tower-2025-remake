namespace SpriteKind {
    export const FlyingEnemy = SpriteKind.create()
    export const Chest = SpriteKind.create()
    export const FallingObjects = SpriteKind.create()
    export const Map = SpriteKind.create()
    export const UI1 = SpriteKind.create()
    export const KillBlock = SpriteKind.create()
    export const fg = SpriteKind.create()
    export const Collectable = SpriteKind.create()
    export const Display = SpriteKind.create()
    export const Display2 = SpriteKind.create()
    export const Display3 = SpriteKind.create()
    export const Spring = SpriteKind.create()
    export const Fireball1 = SpriteKind.create()
    export const batman = SpriteKind.create()
    export const SpikeBlock = SpriteKind.create()
    export const Healthpotion = SpriteKind.create()
    export const UpsideDownSpikeBlock = SpriteKind.create()
    export const Flag = SpriteKind.create()
    export const RightSideSpikeBlock = SpriteKind.create()
    export const LeftSidedSpikeBlock = SpriteKind.create()
    export const TheDragon = SpriteKind.create()
}
function Status_Bar () {
    PlayersHealth = statusbars.create(20, 4, StatusBarKind.Health)
    PlayersHealth.value = 100
    PlayersHealth.setPosition(15, 113)
    PlayersHealth.setLabel("HP")
    PlayersHealth.setBarSize(20, 5)
    PlayersHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
function Valuables () {
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        Star = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f b b f . . . . . . 
            . . . f f f b 5 5 b f f f . . . 
            . . f b b b 5 5 1 1 b b b f . . 
            . . f b 5 5 5 5 1 1 5 5 b f . . 
            . . . f b d 5 5 5 5 d b f . . . 
            . . . f c b 5 5 5 5 b c f . . . 
            . . . f c 5 d d d d 5 c f . . . 
            . . . f c 5 d c c d 5 c f . . . 
            . . . f c c c f f c c c f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Collectable)
        Star.startEffect(effects.starField)
        animation.runImageAnimation(
        Star,
        [img`
            . . . . . . f f . . . . . . . . 
            . . . . . f b b f . . . . . . . 
            . . . . f b 5 5 b f . . . . . . 
            . f f f b b 5 5 b b f f f . . . 
            f b b b b 5 5 1 1 b b b b f . . 
            f b 5 5 5 5 5 1 1 5 5 5 b f . . 
            f b d d 5 5 5 5 5 5 d d b f . . 
            . f b d d 5 5 5 5 d d b f . . . 
            . f c b 5 5 5 5 5 5 b c f . . . 
            . f c b 5 5 5 5 5 5 b c f . . . 
            . f c 5 5 d d d d 5 5 c f . . . 
            . f c 5 d d c c d d 5 c f . . . 
            . f c c c c f f c c c c f . . . 
            . . f f f f . . f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f b b f . . . . . . 
            . . . f f f b 5 5 b f f f . . . 
            . . f b b b 5 5 1 1 b b b f . . 
            . . f b 5 5 5 5 1 1 5 5 b f . . 
            . . . f b d 5 5 5 5 d b f . . . 
            . . . f c b 5 5 5 5 b c f . . . 
            . . . f c 5 d d d d 5 c f . . . 
            . . . f c 5 d c c d 5 c f . . . 
            . . . f c c c f f c c c f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . f b b f . . . . . 
            . . . . . . f b 5 5 b f . . . . 
            . . . f f f b b 5 5 b b f f f . 
            . . f b b b b 5 5 1 1 b b b b f 
            . . f b 5 5 5 5 5 1 1 5 5 5 b f 
            . . f b d d 5 5 5 5 5 5 d d b f 
            . . . f b d d 5 5 5 5 d d b f . 
            . . . f c b 5 5 5 5 5 5 b c f . 
            . . . f c b 5 5 5 5 5 5 b c f . 
            . . . f c 5 5 d d d d 5 5 c f . 
            . . . f c 5 d d c c d d 5 c f . 
            . . . f c c c c f f c c c c f . 
            . . . . f f f f . . f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f b b f . . . . . . 
            . . . f f f b 5 5 b f f f . . . 
            . . f b b b 5 5 1 1 b b b f . . 
            . . f b 5 5 5 5 1 1 5 5 b f . . 
            . . . f b d 5 5 5 5 d b f . . . 
            . . . f c b 5 5 5 5 b c f . . . 
            . . . f c 5 d d d d 5 c f . . . 
            . . . f c 5 d c c d 5 c f . . . 
            . . . f c c c f f c c c f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        300,
        true
        )
        tiles.placeOnTile(Star, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        TreasureChest = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Chest)
        animation.runImageAnimation(
        TreasureChest,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `],
        200,
        true
        )
        tiles.placeOnTile(TreasureChest, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        Coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c 4 4 4 4 c . . . . . 
            . . . . c 4 5 5 5 5 4 c . . . . 
            . . . c 4 5 5 4 4 5 5 4 c . . . 
            . . . c 4 5 4 5 5 4 5 4 c . . . 
            . . . c 4 5 5 5 5 4 5 4 c . . . 
            . . . c 4 5 5 5 5 4 5 4 c . . . 
            . . . c 4 5 5 5 5 4 5 4 c . . . 
            . . . c 4 5 5 5 5 4 5 4 c . . . 
            . . . c 4 5 4 5 5 4 5 4 c . . . 
            . . . c 4 5 5 4 4 5 5 4 c . . . 
            . . . . c 4 5 5 5 5 4 c . . . . 
            . . . . . c 4 4 4 4 c . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        Coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c 5 5 5 5 c . . . . . 
            . . . . c 5 d 3 3 d 5 c . . . . 
            . . . . c 5 3 5 5 1 5 c . . . . 
            . . . . c 5 3 5 5 1 d c . . . . 
            . . . . c d d 1 1 d d c . . . . 
            . . . . . f d d d d f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . c 5 5 5 c . . . . . 
            . . . . . c 5 d 3 d 5 c . . . . 
            . . . . . c 5 3 5 1 5 c . . . . 
            . . . . . c 5 3 5 1 d c . . . . 
            . . . . . c 5 d 1 d d c . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . c 5 d 1 5 c . . . . . 
            . . . . . c 5 3 1 5 c . . . . . 
            . . . . . c 5 3 1 d c . . . . . 
            . . . . . c 5 1 d d c . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c 1 1 c . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . . c d d c . . . . . . 
            . . . . . . c d d c . . . . . . 
            . . . . . . c 3 3 c . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 5 c . . . . . . 
            . . . . . c 5 1 d 5 c . . . . . 
            . . . . . c 5 1 3 5 c . . . . . 
            . . . . . c d 1 3 5 c . . . . . 
            . . . . . c d d 1 5 c . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . c 5 5 5 c . . . . . . 
            . . . . c 5 d 3 d 5 c . . . . . 
            . . . . c 5 1 5 3 5 c . . . . . 
            . . . . c d 1 5 3 5 c . . . . . 
            . . . . c d d 1 d 5 c . . . . . 
            . . . . . f d d d f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        80,
        true
        )
        tiles.placeOnTile(Coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.FallingObjects, SpriteKind.Player, function (sprite, otherSprite) {
    PlayersHealth.value += -75
    pause(5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spring, function (sprite, otherSprite) {
    sprite.vy = -300
})
function CleanUp () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.FlyingEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Chest)
    sprites.destroyAllSpritesOfKind(SpriteKind.FallingObjects)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.UI1)
    sprites.destroyAllSpritesOfKind(SpriteKind.KillBlock)
    sprites.destroyAllSpritesOfKind(SpriteKind.Collectable)
    sprites.destroyAllSpritesOfKind(SpriteKind.UI1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Spring)
    sprites.destroyAllSpritesOfKind(SpriteKind.Fireball1)
    sprites.destroyAllSpritesOfKind(SpriteKind.batman)
    sprites.destroyAllSpritesOfKind(SpriteKind.Flag)
    music.stopAllSounds()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.KillBlock, function (sprite, otherSprite) {
    sprite.sayText("AHHHHH!!!", 1000, true)
    for (let index = 0; index < 15; index++) {
        sprite.startEffect(effects.fire, 4000)
    }
    for (let index = 0; index < 4; index++) {
        PlayersHealth.value += -5
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SpikeBlock, function (sprite, otherSprite) {
    PlayersHealth.value += -15
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flag, function (sprite, otherSprite) {
    if (CheckpointReached == 0) {
        animation.runImageAnimation(
        Checkpoint_Flag,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c c c c c c c c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c c c c c . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c c c c c c c c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c c c c c . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c c c c c c c c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c c c c c . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c e c c c c c c c c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c c c c c . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c c c c c c c c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c c c c c . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `],
        100,
        false
        )
        pause(1000)
        otherSprite.startEffect(effects.halo)
        animation.runImageAnimation(
        Checkpoint_Flag,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c c c c c c c c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c c c c c . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c c . c c c c c 
            . . . . . . c e c 2 c 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c 2 c c c . . 
            . . . . . . c e c . c . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c c . . . c c c 
            . . . . . . c e c 2 c c c 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c 2 2 2 c . . 
            . . . . . . c e c . c c c . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c c . . . . . . 
            . . . . . . c e c 2 c c c c . . 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c c 2 2 2 2 2 c 
            . . . . . . c e c . c c c c c c 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `],
        100,
        true
        )
        CheckpointReached += 1
    } else {
        if (CheckpointReached == 1) {
            otherSprite.startEffect(effects.halo)
            animation.runImageAnimation(
            Checkpoint_Flag,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . . c 5 c . . . . . . . 
                . . . . . . c 5 c c c c c c c c 
                . . . . . . c e c 2 2 2 2 2 2 c 
                . . . . . . c e c 2 2 2 2 2 2 c 
                . . . . . . c e c 2 2 2 2 2 c . 
                . . . . . . c e c c c c c c . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . c c c e c c c . . . . . 
                . . . c e e e e e e e c . . . . 
                . . . c c c c c c c c c . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . . c 5 c . . . . . . . 
                . . . . . . c 5 c c . c c c c c 
                . . . . . . c e c 2 c 2 2 2 2 c 
                . . . . . . c e c 2 2 2 2 2 2 c 
                . . . . . . c e c 2 2 2 2 2 c . 
                . . . . . . c e c c 2 c c c . . 
                . . . . . . c e c . c . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . c c c e c c c . . . . . 
                . . . c e e e e e e e c . . . . 
                . . . c c c c c c c c c . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . . c 5 c . . . . . . . 
                . . . . . . c 5 c c . . . c c c 
                . . . . . . c e c 2 c c c 2 2 c 
                . . . . . . c e c 2 2 2 2 2 2 c 
                . . . . . . c e c 2 2 2 2 2 c . 
                . . . . . . c e c c 2 2 2 c . . 
                . . . . . . c e c . c c c . . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . c c c e c c c . . . . . 
                . . . c e e e e e e e c . . . . 
                . . . c c c c c c c c c . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . . c 5 c . . . . . . . 
                . . . . . . c 5 c c . . . . . . 
                . . . . . . c e c 2 c c c c . . 
                . . . . . . c e c 2 2 2 2 2 c . 
                . . . . . . c e c 2 2 2 2 2 2 c 
                . . . . . . c e c c 2 2 2 2 2 c 
                . . . . . . c e c . c c c c c c 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . . . c e c . . . . . . . 
                . . . . c c c e c c c . . . . . 
                . . . c e e e e e e e c . . . . 
                . . . c c c c c c c c c . . . . 
                `],
            100,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.splash("You completed Floor 1")
        game.splash("Score: " + info.score() + " Health: " + PlayersHealth.value + " Lives: " + info.life())
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Knight.vy == 0) {
        music.setVolume(900)
        music.play(music.createSoundEffect(WaveShape.Square, 499, 736, 210, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        Knight.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.batman, function (sprite, otherSprite) {
    PlayersHealth.value += -25
    pause(2000)
})
function JUNK () {
    UI3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c c c c . . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . . c c c c c c c c c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.UI1)
    UI3.setPosition(78, 106)
    UI3.changeScale(2, ScaleAnchor.Middle)
    UI3.setFlag(SpriteFlag.RelativeToCamera, true)
    scene.cameraShake(2, 5000)
    music.play(music.createSong(hex`005e010408010105001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400010604000800010c08000c0001110c001000011410001400012a14001800012718001c0001241c0020000120`), music.PlaybackMode.UntilDone)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    Random_Value_Number_ = randint(0, 0)
    if (Random_Value_Number_ == 0) {
        otherSprite.startEffect(effects.starField)
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . c c c c c c c c . . . . 
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . c f f f f f f f f c . . . 
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . c f b b b b e e e e f c . . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . c f b e e e e e e e e e f c . 
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . c f f f f f 5 5 f f f f f c . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . 1 . . b 2 1 2 2 b . . . . . 
            . 1 1 1 . b 2 1 1 2 b . . . . . 
            . . 1 . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . 1 . . 
            . . . . . . b 2 2 b . . 1 1 1 . 
            . . . . . . . b b . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . 1 . . . 
            . . . . . . b 2 2 b . 1 1 1 . . 
            . . . . . b 2 1 2 2 b . 1 . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . 1 . . . b 2 2 b . . . . . . 
            . 1 1 1 . b 2 1 2 2 b . . . . . 
            . . 1 . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . 1 . . 
            . . . . . b 2 1 2 2 b . 1 1 1 . 
            . . . . . b 2 1 1 2 b . . 1 . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 2 2 b . . . . . 
            . . . . . b 2 1 1 2 b . . . . . 
            . . . . . . b 2 2 b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 1 . 
            . . . . . . . . . . . . . . . . 
            . 1 . . . . . . . . . . . . . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            . c c c c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f f f f f f f f f f f f c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            . c f b e e e e e e e e e f c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            . c f b e e e e e e e e e f c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c f b e e e 5 5 e e e e f c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
        pause(2000)
        info.changeScoreBy(randint(50, 150))
        sprites.destroy(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Spring, function (sprite, otherSprite) {
    sprite.vy = -300
})
info.onCountdownEnd(function () {
    CleanUp()
    game.setGameOverMessage(false, "The Tower Collapsed")
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightSideSpikeBlock, function (sprite, otherSprite) {
    PlayersHealth.value += -15
    pause(2000)
})
function EXTRA_UNUSED_CONTENT () {
    mySprite = sprites.create(img`
        . . . f f f f f f f f f f f . . 
        . . f f e e e e e e e e e f f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e e e e d e e e e f . 
        . . f e e d d f d d f d e e f . 
        . . f e e e d f d d f d e f f . 
        . . f e e d d f d d f d e f . . 
        . f 2 2 e 2 2 2 2 2 2 2 e f . . 
        f 2 f 2 2 2 2 2 2 2 2 f f . . . 
        . f 2 d d 9 9 9 9 9 9 d d f . . 
        . . f d d 6 6 6 6 6 6 d d f . . 
        . . . f f 6 6 6 6 6 6 f f . . . 
        . . . . f c c c c c c f . . . . 
        . . . . f e e e f e e f . . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundImage(img`
        99999999fccccccccccccccccccccccccccccccccccccccccccccff999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
        99999999ffccccccccccccccccccccccccccccccccccccccccfff99ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999fcccccccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999fcccccccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
        9999999ffccccccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
        999999999ffccccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
        99999999999fffccccccccccccccccccccccccccccccccccccf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
        99999999999999fccccccccccccccccccccccccccccccccccf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
        999999999999999fffccccccccccccccccccccccddccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999ffcccccccccccccccccccccccccccf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
        99999999999999999999fcccccccccccccccccccccccccf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
        99999999999999999999ffccccccccccccccccccccccccf99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
        999999999999999999999fcc666ccccccccccccccccccf999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
        9999999999999999999999fcc66cccccccccccccccccf9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
        999999999999999999999ffcc66cc6cccccccccccccf99999999999999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
        999999999999999996699fcc66ccccccccccccccccf999999999999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
        99999999999999999699fcccccccccccccccccccccf999999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
        6999699999999999999fccccccccccccccccccccccf999999999999999999999999999999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
        9999999999999999999fcccccccccccccccccccccf9999999999999999999999999999999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
        696999999999999999f6ccccccc6cccccccccccccf9999999999999999999999999999996999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
        699996999999999999fccccccccccccccccccccccf9999999999999999999999999999999999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
        6999999999999999999f6cc6ccccccccccccccccccf999999999999999999999999999999999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
        99999999999999999999fcccccccccccccccccccccf999999999999999999999999999999999669966999966669999999699996999999999966996969996969996999996666666669666666666666666
        999999999999999999969fccccccccccccccccccccf999999999999999999999999999999999999666666996969996669999699999999999999999996999699969966699999999666666666666666666
        9999999966999996999996fccccccccccccccccccccf999999999999999999999999999999999996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
        99999999996999966996669ffccccccccccccccccccf999999999999999999999999999999999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
        9999999999996699969669966fccccccccccccccccccf9669999999999999999999666996666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
        99999669969666999699999996fcccccccccccccccccf6666666666666666666666699999666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
        666996666666699966999999999fcccccccccccccccccf666666666666666666666666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
        6666666666669996666966999999ffccccccccccccccccf66666666666666666666666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
        666666666666666666666969996999fccccccccccccccccf6666666666666666666666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
        66666666666666666666b9699999969fccccccccccccccccf66666666666666666666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
        666666666666666666d6666666666666fcccccccccccccccf666666666666666666666666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
        666666666666666666d66666666666666ffcccccccccccccf66666666666666666666bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
        b6666666b6b6b66666d666666666666666fcccccccccccccf666666666666666666666b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
        b6666666b6b6bb66b6d666666666666666fccccccccccccf66666666666666666666666bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
        bb6b66bb64bb64bb66d6666666666666666fcccccccccccf66666666666666666666664444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
        444466bb44464446b6b6666666666666666fccccccccccf6666666666666666666666444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
        44b6b4b4b4b6b4444b46666666666666666fccccccccccf66666666666666666666664446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
        444444b4444444444466666666666666666fcccccccccf66666666666666666666666444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
        44444464444444444466666666666666666fccccccccf6666666666666666666666664444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
        4444b66b44444466646666666666666666fcccccccccf6666666666666666666666664464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
        4444466b44444466644444444446666666fccccccccf6666666666666666666666666f464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
        4444446644444444464444444444446666fccccccccf66666666666666666666666664664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
        4444444444444f44444444444444444444fcccccccccf66666c66666666666666666644dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
        4444464444444f444d4444444444444444f44cccccccf6ccccdc4ffccbbcccccccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
        4444464444444ff44ff444444444d44444f444ccccccf6cccccbcccccccccccccccdddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
        4444446444444ffddfd444444444dddddfdfcccccccccfcbbccccccccccbbcbcbccd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
        44444444444444f3bf4444444444ddfddfdfc4ccccccccfbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
        44444444ddd444ff4f344444444dddffdfddffccccccccfbbcccbccccbccbcbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
        44444444dddddddfdf44444444dddddfffdddfccccc4ccfbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
        44444444ddddddd4ff4d44444ddddddfffddddffcccccccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
        6444444ddd3dd44dff6d444dddddddddffdddd4dffcccccbbcccbbbbbbbbbbbbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
        4344ddddddddd4ddff4d44ddddddd4ddffdddd3dddfccccbbcccbbbbbbbbbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
        4444ddddb4ddddddfddd44d4ddddddddffdddddddddfcbbbbbbbbbbbbbbbbbbbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
        4444deedebd4434efffdddddd3ddddddffdddddddddfbbbcbbbbbbbbbbbbbbbbccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
        4444befeebe4d4beff4dddddddddddddffdddddddddcffcccbbbbbbbbbbbbbbbccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
        444eeeefeeeed4e4ff4dddddddddddddffddddddddfccfccccbccbbbbbbbbbbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
        fffeeffffeeeeeffffedddddddddddddffdffddfffffbcbccccccbbbbbbbbbbbccdddffddddfffffddddd4dddfffdddddffdddddffffffffffffffffffffffffffffffffffffffffffffffffffdccccf
        effeffedeeffffffffffffffffffffdfffffffffffccbcbcbccbcbbbbbbbbbbbccdddffddd4fffffdddddddddfffdddbdffd4dddfffffff6ffffffffffffffffffffffffffffffffffffffffffdccccc
        beffffedffffffffffffffffffffffffffffffccfcccbcbcbccbbbbbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffff6fffffffffffffffffffffffffffffffffffffffffffcccccc
        dffffffffffffffffffffffffffffffffffffcccccbcbcbcbccbbbbbbbbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
        ffffffffffffffffffffffffffffffffffccccccbcbcbcbcbccbbbbbbbbbbbbbccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
        effffffffffffffffffffffffffffffffccbbcccbcbcbcbcbcccbbbbbbbbbbbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
        fffffffffffffffffffffffcccccfffffcbbbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
        fffffffffffffffffffffffcbbbccfffcbbbbcccbcbcbcbcbcccbccbbbccbbcbbcccfffffffffffffccccccccccccfbccbbbcccbbccccfffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
        ffffffffffffffffffffffffcbbbccccbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffbccccccccbccbcccbbbccccbccccbbffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
        ffffffffffffffffffffffffcbbbbccbbbbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffbbbbbbbbbcbbbcccbbbccccbccbcbbbbffffffffffffffffffffffffffffdbccccbbbbccccbcccc
        ffffffffffffffffffffffccccbbccbbccbbccccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffbbbbcbbbbcbbbcccbbbbcccbbcbcccbccbffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
        fffffffffffffffffffffbcccbccbbbbbbbbccccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffbbbbcbbbbbbbbccccbcbcccbbcbbcccccbbbffffffffffffffffffffccfccbbbbbccccbbccbbbcc
        fffffffffffffffffffffbcbbbcbbbbbbbbbccccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccfffffffbbbbbbbbccbbbccccbcbcccbbcccccccccccfffffffffffffffffccbbcccccbbbbbbccbbccbbccc
        ffffffffffffffffffffccbbbbbccbcbbbccccccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccfccccccbbcbbccccccbbbcccbbcbbcbbccbddfffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
        fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbccccccccbbbbcccccbbbbcccbccbcccbbdddfffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
        ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbccccccccbb6ffbfffbb9fccbccbcccbccbcbdddfffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
        bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccbb4fffffffff6ccbbbccccbcccdddfffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
        bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccbbbbbbbffffffffbbbbcccbbcddcfffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
        bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccbbbbbbbcbbbbf6fffffffcbdd66fffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
        bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccbbbbbbbbbcbbbbfffffffbdbffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
        bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbccccccbbbbbbbcccbbdffffffffff66f66ffffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
        bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
        bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
        ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
        ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
        cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
        cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
        bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
        bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
        bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
        bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
        bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
        bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
        cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
        bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
        bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
        ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
        cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
        cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
        ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
        bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
        bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
        cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
        bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
        ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
        bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
        dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
        d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
        ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
        4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
        dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
        `)
}
function Music () {
    music.setVolume(47)
    music.play(music.createSong(hex`0082000408040205001c000f0a006400f4010a0000040000000000000000000000000000000002c00000000400012904000800012408000c0001200c001000011d10001400011414001800010c18001c0001081c002000010520002400012924002800012428002c0001202c003000011d30003400011434003800010c38003c0001083c004000010540004400011d44004800012048004c0001244c005000012950005400010654005800010a58005c00010d5c006000011460006400011d64006800012068006c0001246c007000012970007400010674007800010a78007c00010d7c008000011409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001800000001000103200021000109400041000103600061000109`), music.PlaybackMode.LoopingInBackground)
}
function UI_Display () {
    UI = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c c c c c c c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.UI1)
    UI.changeScale(2, ScaleAnchor.Middle)
    UI.setFlag(SpriteFlag.RelativeToCamera, true)
    UI.setPosition(20, 110)
    UI2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c c c c c c c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . c b b b b b b b b b b b b c . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.UI1)
    UI2.changeScale(2, ScaleAnchor.Middle)
    UI2.setFlag(SpriteFlag.RelativeToCamera, true)
    UI2.setPosition(138, 110)
}
function The_Whole_Game () {
    info.startCountdown(180)
    scene.setBackgroundColor(11)
    tiles.setCurrentTilemap(tilemap`level1`)
    PlayersFunction()
    EnemyFunction()
    Valuables()
    Music()
    Status_Bar()
    Obstacles()
    UI_Display()
    ThestartSystem()
}
info.onScore(10000, function () {
    info.changeLifeBy(1)
})
function Knights_Sprite_Animations () {
    characterAnimations.loopFrames(
    Knight,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e e f . 
        . . . f e e e d e e d e e e f . 
        . . f e e d f d d f d d e e f . 
        . . . . f d f d d f d e e e f . 
        . . . f e d f f d 2 e e e e f . 
        . . . f e f d d f 2 2 2 e f 2 f 
        . . . . . f d d f d c c f 2 f . 
        . . . . . . f f c c c f 2 f 2 f 
        . . . . . . c c c c c f f 2 . . 
        . . . . . f f c c c c f f . . . 
        . . . . . f f f f b b f . . . . 
        . . . . . f f f . f f . . . . . 
        . . . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f e e e e e e e e f . . . . 
        . f e e e e e e e e e e f . . . 
        . f e e e e e e e e e e e f . . 
        . . f e e e d e e d e e e f . . 
        . f e e d f d d f d d e e f . . 
        . . . f d f d d f d e e e f . . 
        . . f e 2 2 2 2 2 e e e e f f . 
        . . f e f 2 2 2 2 2 2 e f 2 . . 
        . . . . f c c c c c f 2 f 2 f . 
        . . . f d c c c c d d f 2 . . . 
        . . . f d c c c c d d f . . . . 
        . . . . f b b b b b f . . . . . 
        . . . . f b f . b f f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . f f f f f f f f . . . . . . 
        . f e e e e e e e e f . . . . . 
        f e e e e e e e e e e f . . . . 
        f e e e e e e e e e e e f . . . 
        . f e e e d e e d e e e f . . . 
        f e e d f d d f d d e e f . . . 
        . . f d f d d f d e e e f . . . 
        . f e 2 2 2 2 f f e e e f . . . 
        . f e f 2 2 f d d f e f 2 f . . 
        . . . f c d f d d f f 2 f . . . 
        . . . f c c c f f f 2 f 2 f . . 
        . . . f c c c c c f . 2 . . . . 
        . . . f c c f f c f . . . . . . 
        . . . . b f f f b f . . . . . . 
        . . . . f b f f b f . . . . . . 
        . . . . . f f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f e e e e e e e e f . . . . 
        . f e e e e e e e e e e f . . . 
        . f e e e e e e e e e e e f . . 
        . . f e e e d e e d e e e f . . 
        . f e e d f d d f d d e e f . . 
        . . . f d f d d f d e e e f . . 
        . . f e 2 2 2 2 2 e e e e f f . 
        . . f e f 2 2 2 2 2 2 e f 2 . . 
        . . . . f c c c c c f 2 f 2 f . 
        . . . f d c c c c d d f 2 . . . 
        . . . f d c c c c d d f . . . . 
        . . . . f b b b b b f . . . . . 
        . . . . f b f . b f f . . . . . 
        . . . . f f f . f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Knight,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e d e e d e e e f . . . 
        . f e e d d f d d f d e e f . . 
        . f e e e d f d d f d f . . . . 
        . f e e e e 2 d f f d e f . . . 
        f 2 f e 2 2 2 f d d f e f . . . 
        . f 2 f c c d f d d f . . . . . 
        f 2 f 2 f c c c f f . . . . . . 
        . . 2 f f c c c c c . . . . . . 
        . . . f f c c c c f f . . . . . 
        . . . . f b b f f f f . . . . . 
        . . . . . f f . f f f . . . . . 
        . . . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e e e e e e f . . 
        . . . f e e e e e e e e e e f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e d e e d e e e f . . 
        . . f e e d d f d d f d e e f . 
        . . f e e e d f d d f d f . . . 
        . f f e e e e 2 2 2 2 2 e f . . 
        . . 2 f e 2 2 2 2 2 2 f e f . . 
        . f 2 f 2 f c c c c c f . . . . 
        . . . 2 f d d c c c c d f . . . 
        . . . . f d d c c c c d f . . . 
        . . . . . f b b b b b f . . . . 
        . . . . . f f b . f b f . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f f f f . . 
        . . . . . f e e e e e e e e f . 
        . . . . f e e e e e e e e e e f 
        . . . f e e e e e e e e e e e f 
        . . . f e e e d e e d e e e f . 
        . . . f e e d d f d d f d e e f 
        . . . f e e e d f d d f d f . . 
        . . . f e e e f f 2 2 2 2 e f . 
        . . f 2 f e f d d f 2 2 f e f . 
        . . . f 2 f f d d f d c f . . . 
        . . f 2 f 2 f f f c c c f . . . 
        . . . . 2 . f c c c c c f . . . 
        . . . . . . f c f f c c f . . . 
        . . . . . . f b f f f b . . . . 
        . . . . . . f b f f b f . . . . 
        . . . . . . . f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e e e e e e f . . 
        . . . f e e e e e e e e e e f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e d e e d e e e f . . 
        . . f e e d d f d d f d e e f . 
        . . f e e e d f d d f d f . . . 
        . f f e e e e 2 2 2 2 2 e f . . 
        . . 2 f e 2 2 2 2 2 2 f e f . . 
        . f 2 f 2 f c c c c c f . . . . 
        . . . 2 f d d c c c c d f . . . 
        . . . . f d d c c c c d f . . . 
        . . . . . f b b b b b f . . . . 
        . . . . . f f b . f b f . . . . 
        . . . . . f f f . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Knight,
    [img`
        . . . . . f f f f f f f f . . . 
        . . . . f e e e e e e e e f . . 
        . . . f e e e e e e e e e e f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e d e e d e e e f . . 
        . . f e e d d f d d f d e e f . 
        . . f e e e d f d d f d f . . . 
        . . f e e e e 2 2 2 2 2 e f . . 
        . f 2 f e 2 2 2 2 2 2 f e f . . 
        . . f 2 f c c d d d c . . . . . 
        . f 2 f 2 f c c c c c f . . . . 
        . . . 2 f d d c c c c d f . . . 
        . . . . f d d c c c c d f . . . 
        . . . . . f b b b b b f . . . . 
        . . . . . f f b . f b f . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e e e e e e f . . 
        . . . f e e e e e e e e e e f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e d e e d e e e f . . 
        . . f e e d d f d d f d e e f . 
        . . f e e e d f d d f d f . . . 
        . . f e e e e 2 2 2 2 2 e f . . 
        . . . f e 2 2 2 2 2 2 f e f . . 
        . f 2 f f f c d d d c f . . . . 
        . . f 2 f d d c c c c d f . . . 
        . . . 2 f d d c c c c d f . . . 
        . . . . . f b b b b b f . . . . 
        . . . . . f f b . f b f . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e e e e e e f . . 
        . . . f e e e e e e e e e e f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e d e e d e e e f . . 
        . . f e e d d f d d f d e e f . 
        . . f e e e d f d d f d f . . . 
        . f f e e e e 2 2 2 2 2 e f . . 
        . . 2 f e 2 2 2 2 2 2 f e f . . 
        . f f 2 f c c d d d c . . . . . 
        . . . 2 f f c c c c c f . . . . 
        . . . . f d d c c c c d f . . . 
        . . . . . d d b b b b d f . . . 
        . . . . . f f b . f b f . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . f f f f f f f f . . . 
        . . . . f e e e e e e e e f . . 
        . . . f e e e e e e e e e e f . 
        . . f e e e e e e e e e e e f . 
        . . f e e e d e e d e e e f . . 
        . . f e e d d f d d f d e e f . 
        . . f e e e d f d d f d f . . . 
        . . f e e e e 2 2 2 2 2 e f . . 
        . f 2 f e 2 2 2 2 2 2 f e f . . 
        . . f 2 f c c d d d c . . . . . 
        . f 2 f 2 f c c c c c f . . . . 
        . . . 2 f d d c c c c d f . . . 
        . . . . f d d c c c c d f . . . 
        . . . . . f b b b b b f . . . . 
        . . . . . f f b . f b f . . . . 
        . . . . . f f f . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Knight,
    [img`
        . . . f f f f f f f f . . . . . 
        . . f e e e e e e e e f . . . . 
        . f e e e e e e e e e e f . . . 
        . f e e e e e e e e e e e f . . 
        . . f e e e d e e d e e e f . . 
        . f e e d f d d f d d e e f . . 
        . . . f d f d d f d e e e f . . 
        . . f e 2 2 2 2 2 e e e e f . . 
        . . f e f 2 2 2 2 2 2 e f 2 f . 
        . . . . . c d d d c c f 2 f . . 
        . . . . f c c c c c f 2 f 2 f . 
        . . . f d c c c c d d f 2 . . . 
        . . . f d c c c c d d f . . . . 
        . . . . f b b b b b f . . . . . 
        . . . . f b f . b f f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f e e e e e e e e f . . . . 
        . f e e e e e e e e e e f . . . 
        . f e e e e e e e e e e e f . . 
        . . f e e e d e e d e e e f . . 
        . f e e d f d d f d d e e f . . 
        . . . f d f d d f d e e e f . . 
        . . f e 2 2 2 2 2 e e e e f . . 
        . . f e f 2 2 2 2 2 2 e f . . . 
        . . . . f c d d d c f f f 2 f . 
        . . . f d c c c c d d f 2 f . . 
        . . . f d c c c c d d f 2 . . . 
        . . . . f b b b b b f . . . . . 
        . . . . f b f . b f f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f e e e e e e e e f . . . . 
        . f e e e e e e e e e e f . . . 
        . f e e e e e e e e e e e f . . 
        . . f e e e d e e d e e e f . . 
        . f e e d f d d f d d e e f . . 
        . . . f d f d d f d e e e f . . 
        . . f e 2 2 2 2 2 e e e e f f . 
        . . f e f 2 2 2 2 2 2 e f 2 . . 
        . . . . . c d d d c c f 2 f f . 
        . . . . f c c c c c f f 2 . . . 
        . . . f d c c c c d d f . . . . 
        . . . f d b b b b d d . . . . . 
        . . . . f b f . b f f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f e e e e e e e e f . . . . 
        . f e e e e e e e e e e f . . . 
        . f e e e e e e e e e e e f . . 
        . . f e e e d e e d e e e f . . 
        . f e e d f d d f d d e e f . . 
        . . . f d f d d f d e e e f . . 
        . . f e 2 2 2 2 2 e e e e f . . 
        . . f e f 2 2 2 2 2 2 e f 2 f . 
        . . . . . c d d d c c f 2 f . . 
        . . . . f c c c c c f 2 f 2 f . 
        . . . f d c c c c d d f 2 . . . 
        . . . f d c c c c d d f . . . . 
        . . . . f b b b b b f . . . . . 
        . . . . f b f . b f f . . . . . 
        . . . . f f f . f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.FlyingEnemy, function (sprite, otherSprite) {
    PlayersHealth.value += -50
    pause(1000)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    Amount_Of_Stars = 0
    CleanUp()
    The_Whole_Game()
})
function Obstacles () {
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        Checkpoint_Flag = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c . . . . . . . 
            . . . . . . c e c c c c c c c c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 2 c 
            . . . . . . c e c 2 2 2 2 2 c . 
            . . . . . . c e c c c c c c . . 
            . . . . c c c e c c c . . . . . 
            . . . c e e e e e e e c . . . . 
            . . . c c c c c c c c c . . . . 
            `, SpriteKind.Flag)
        tiles.placeOnTile(Checkpoint_Flag, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        LeftSidedSpike = sprites.create(img`
            c . . . . . . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c 1 c c c c . . . . . . . . . . 
            c b b 1 1 1 c c c . . . . . . . 
            c b b b b b 1 1 1 c . . . . . . 
            c b b b b b c c c . . . . . . . 
            c b c c c c . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c 1 c c c c . . . . . . . . . . 
            c b b 1 1 1 c c c . . . . . . . 
            c b b b b b 1 1 1 c . . . . . . 
            c b b b b b c c c . . . . . . . 
            c b c c c c . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            `, SpriteKind.LeftSidedSpikeBlock)
        animation.runImageAnimation(
        LeftSidedSpike,
        [img`
            c . . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            c c c c . . . . . . . . . . . . 
            c 1 1 1 c c c . . . . . . . . . 
            c b b b 1 1 1 c . . . . . . . . 
            c b b b c c c . . . . . . . . . 
            c c c c . . . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c 1 c c c c . . . . . . . . . . 
            c b b 1 1 1 c c c . . . . . . . 
            c b b b b b 1 1 1 c . . . . . . 
            c b b b b b c c c . . . . . . . 
            c b c c c c . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            `,img`
            c . . . . . . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c 1 c c c c . . . . . . . . . . 
            c b 1 1 1 1 c c c . . . . . . . 
            c b b b b b 1 1 1 c . . . . . . 
            c b b b b b c c c . . . . . . . 
            c b c c c c . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c c c c . . . . . . . . . . . . 
            c 1 1 1 c c c . . . . . . . . . 
            c b b b 1 1 1 c . . . . . . . . 
            c b b b c c c . . . . . . . . . 
            c c c c . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(LeftSidedSpike, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
        RightSidedSpike = sprites.create(img`
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . c c c c 1 c 
            . . . . . . . c c c 1 1 1 b b c 
            . . . . . . c 1 1 1 b b b b b c 
            . . . . . . . c c c b b b b b c 
            . . . . . . . . . . c c c c b c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . c c c c 1 c 
            . . . . . . . c c c 1 1 1 b b c 
            . . . . . . c 1 1 1 b b b b b c 
            . . . . . . . c c c b b b b b c 
            . . . . . . . . . . c c c c b c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . . . . . . c 
            `, SpriteKind.RightSideSpikeBlock)
        animation.runImageAnimation(
        RightSidedSpike,
        [img`
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . c c c c b c 
            . . . . . . . c c c b b b b b c 
            . . . . . . c 1 1 1 b b b b b c 
            . . . . . . . c c c 1 1 1 b b c 
            . . . . . . . . . . c c c c 1 c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . . . c c c c 
            . . . . . . . . . c c c b b b c 
            . . . . . . . . c 1 1 1 b b b c 
            . . . . . . . . . c c c 1 1 1 c 
            . . . . . . . . . . . . c c c c 
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . . c 
            `,img`
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . c c c c 
            . . . . . . . . . c c c b b b c 
            . . . . . . . . c 1 1 1 b b b c 
            . . . . . . . . . c c c 1 1 1 c 
            . . . . . . . . . . . . c c c c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . c c c c b c 
            . . . . . . . c c c b b b b b c 
            . . . . . . c 1 1 1 b b b b b c 
            . . . . . . . c c c 1 1 1 1 b c 
            . . . . . . . . . . c c c c 1 c 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . . . . . . c 
            `],
        200,
        true
        )
        tiles.placeOnTile(RightSidedSpike, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        UpsideDownSpike = sprites.create(img`
            c c c c c c c c c c c c c c c c 
            . c 1 b b b b c c 1 b b b b c . 
            . . c b b b c . . c b b b c . . 
            . . c 1 b b c . . c 1 b b c . . 
            . . c 1 b b c . . c 1 b b c . . 
            . . c 1 b b c . . c 1 b b c . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . . c . . . . . . c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.UpsideDownSpikeBlock)
        animation.runImageAnimation(
        UpsideDownSpike,
        [img`
            c c c c c c c c c c c c c c c c 
            . c b b b b 1 c c c b b 1 c . . 
            . . c b b b c . . c b b 1 c . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b 1 c . . . c 1 c . . . 
            . . c b b 1 c . . . c 1 c . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . c 1 c . . . . . c . . . . 
            . . . c 1 c . . . . . . . . . . 
            . . . . c . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            c c c c c c c c c c c c c c c c 
            . . c b b 1 c c c b b b b 1 c . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . . c 1 c . . . c b b 1 c . . 
            . . . c 1 c . . . c b b 1 c . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . . c . . . . . c 1 c . . . 
            . . . . . . . . . . c 1 c . . . 
            . . . . . . . . . . . c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(UpsideDownSpike, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        Spike = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c . . . . . . c . . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b b c . . c b b b c . . 
            . c b b b b 1 c c b b b b 1 c . 
            c c c c c c c c c c c c c c c c 
            `, SpriteKind.SpikeBlock)
        animation.runImageAnimation(
        Spike,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c . . . . . . . . . . . 
            . . . c 1 c . . . . . . . . . . 
            . . . c 1 c . . . . . c . . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . c b b 1 c . . . c 1 c . . . 
            . . c b b 1 c . . . c 1 c . . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b b c . . c b b 1 c . . 
            . c b b b b 1 c c c b b 1 c . . 
            c c c c c c c c c c c c c c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c . . . . 
            . . . . . . . . . . c 1 c . . . 
            . . . . c . . . . . c 1 c . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . . . c 1 c . . . c b b 1 c . . 
            . . . c 1 c . . . c b b 1 c . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b 1 c . . c b b 1 c . . 
            . . c b b 1 c c c b b b b 1 c . 
            c c c c c c c c c c c c c c c c 
            `],
        200,
        true
        )
        tiles.placeOnTile(Spike, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        SpringJump = sprites.create(img`
            c c c c c c c c c c c c c c c c 
            c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
            c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
            c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
            c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
            . c c c c c c c c c c c c c c . 
            . . . . c 1 c . . c 1 c . . . . 
            . . . . c 1 1 c c 1 1 c . . . . 
            . . . . . c 1 1 c 1 c . . . . . 
            . . . . . c c 1 1 c c . . . . . 
            . . . . c 1 1 c c 1 1 c . . . . 
            . . . c 1 1 c . . c 1 1 c . . . 
            . . . c 1 c . . . . c 1 c . . . 
            . c c c c c c c c c c c c c c . 
            c b b b b b b b b b b b b b b c 
            c c c c c c c c c c c c c c c c 
            `, SpriteKind.Spring)
        tiles.placeOnTile(SpringJump, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        LavaBlock = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . 4 4 
            5 5 5 4 4 . . . . . . 4 4 4 4 5 
            5 5 5 5 4 4 4 4 4 4 4 4 5 5 5 5 
            5 5 5 5 5 5 4 4 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            4 4 4 4 4 5 5 5 5 5 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 
            2 2 2 2 4 4 4 4 4 4 4 2 2 2 2 2 
            2 2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, SpriteKind.KillBlock)
        LavaBlock.startEffect(effects.fire)
        animation.runImageAnimation(
        LavaBlock,
        [img`
            . . . . . . . . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . 4 4 
            5 5 5 4 4 . . . . . . 4 4 4 4 5 
            5 5 5 5 4 4 4 4 4 4 4 4 5 5 5 5 
            5 5 5 5 5 5 4 4 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            4 4 4 4 4 5 5 5 5 5 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 
            2 2 2 2 4 4 4 4 4 4 4 2 2 2 2 2 
            2 2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . 4 4 5 5 5 4 4 . . . . . 
            . . . 4 4 5 5 5 5 5 4 4 . . . . 
            . . 4 4 5 5 5 5 5 5 5 4 4 . . . 
            4 4 5 5 5 5 5 5 5 5 5 5 5 4 4 4 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 4 4 4 4 4 4 4 5 5 5 5 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 
            4 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 
            4 4 4 4 2 2 2 2 2 2 2 2 4 4 4 4 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `],
        300,
        true
        )
        tiles.placeOnTile(LavaBlock, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        Fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . 2 2 2 4 4 2 2 . . . . . 
            . . . 2 2 4 4 4 4 4 2 2 . . . . 
            . . . 2 4 4 4 5 5 4 4 2 . . . . 
            . . . 2 4 4 5 5 5 4 4 2 2 . . . 
            . . . 2 4 4 5 5 5 5 4 4 2 . . . 
            . . . 2 4 4 4 5 5 5 4 4 2 . . . 
            . . . . 2 4 4 4 5 4 4 2 . . . . 
            . . . . 2 2 4 4 4 4 2 2 . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball1)
        Fireball.startEffect(effects.fire)
        tiles.placeOnTile(Fireball, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.UpsideDownSpikeBlock, function (sprite, otherSprite) {
    PlayersHealth.value += -15
    pause(2000)
})
info.onScore(2500, function () {
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    PlayersHealth.value += -25
    pause(2000)
})
function ThestartSystem () {
    Star1Collected = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Display)
    Star1Collected.setPosition(128, 113)
    Star1Collected.setFlag(SpriteFlag.RelativeToCamera, true)
    Star2Collected = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Display2)
    Star2Collected.setPosition(139, 113)
    Star2Collected.setFlag(SpriteFlag.RelativeToCamera, true)
    Star3Collected = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Display3)
    Star3Collected.setPosition(150, 113)
    Star3Collected.setFlag(SpriteFlag.RelativeToCamera, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectable, function (sprite, otherSprite) {
    music.setVolume(41)
    music.play(music.createSong(hex`00f4010408010100001c00010a006400f4016400000400000000000000000000000000050000041e000000040001270400080001200c001000012514001800012a1c002000012c`), music.PlaybackMode.InBackground)
    otherSprite.vy += -25
    pause(200)
    sprites.destroy(otherSprite, effects.starField, 200)
    Amount_Of_Stars += 1
    if (Amount_Of_Stars == 3) {
        music.setVolume(41)
        music.play(music.createSong(hex`00f4010408030100001c00010a006400f4016400000400000000000000000000000000050000046d0000000400011904000800011d08000c0001200c001000012410001400012714001800012a18001c0001271c002000012920002400012a24002800012728002c0001242c003000012030003400011d34003800012038003c000222273c004000012940004400012a44004800012c`), music.PlaybackMode.InBackground)
    }
})
info.onLifeZero(function () {
    music.stopAllSounds()
    music.setVolume(255)
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverMessage(false, "You're Dead")
    game.gameOver(false)
})
function Ghost_Skeleton_Sprite_Animation () {
    characterAnimations.loopFrames(
    Skeleton_Ghost,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1d2fddddbf......
        ......fbddffdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fbdd2fdbbbcf......
        .....fbf11111bbcf.......
        .....f1f1b1fffff........
        .....fbfbfcffffff.......
        ......fffffffffff.ff....
        .........ffffffffff.....
        ........f1fffffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Skeleton_Ghost,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddf2d1df......
        ......fcbbbdffddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......fcbbbdf2ddbf......
        .......fcbb11111fbf.....
        ........fffff1b1f1f.....
        .......ffffffcfbfbf.....
        ....ff.fffffffffff......
        .....ffffffffff.........
        .....fffffffff1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.vy += -25
    pause(300)
    info.changeScoreBy(randint(25, 100))
    sprites.destroy(otherSprite)
})
info.onScore(5000, function () {
    info.changeLifeBy(1)
})
info.onScore(7500, function () {
    info.changeLifeBy(1)
})
function PlayersFunction () {
    if (CheckpointReached == 0) {
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            Knight = sprites.create(img`
                . . . . . f f f f f f f f . . . 
                . . . . f e e e e e e e e f . . 
                . . . f e e e e e e e e e e f . 
                . . f e e e e e e e e e e e f . 
                . . f e e e d e e d e e e f . . 
                . . f e e d d f d d f d e e f . 
                . . f e e e d f d d f d f . . . 
                . . f e e e e 2 2 2 2 2 e f . . 
                . f 2 f e 2 2 2 2 2 2 f e f . . 
                . . f 2 f c c d d d c . . . . . 
                . f 2 f 2 f c c c c c f . . . . 
                . . . 2 f d d c c c c d f . . . 
                . . . . f d d c c c c d f . . . 
                . . . . . f b b b b b f . . . . 
                . . . . . f f b . f b f . . . . 
                . . . . . f f f . f f f . . . . 
                `, SpriteKind.Player)
            scene.cameraFollowSprite(Knight)
            controller.moveSprite(Knight, 100, 0)
            Knight.ay = 600
            Knights_Sprite_Animations()
            tiles.placeOnTile(Knight, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    } else {
        if (CheckpointReached == 1) {
            for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
                Knight = sprites.create(img`
                    . . . . . f f f f f f f f . . . 
                    . . . . f e e e e e e e e f . . 
                    . . . f e e e e e e e e e e f . 
                    . . f e e e e e e e e e e e f . 
                    . . f e e e d e e d e e e f . . 
                    . . f e e d d f d d f d e e f . 
                    . . f e e e d f d d f d f . . . 
                    . . f e e e e 2 2 2 2 2 e f . . 
                    . f 2 f e 2 2 2 2 2 2 f e f . . 
                    . . f 2 f c c d d d c . . . . . 
                    . f 2 f 2 f c c c c c f . . . . 
                    . . . 2 f d d c c c c d f . . . 
                    . . . . f d d c c c c d f . . . 
                    . . . . . f b b b b b f . . . . 
                    . . . . . f f b . f b f . . . . 
                    . . . . . f f f . f f f . . . . 
                    `, SpriteKind.Player)
                scene.cameraFollowSprite(Knight)
                controller.moveSprite(Knight, 100, 0)
                Knight.ay = 600
                Knights_Sprite_Animations()
                tiles.placeOnTile(Knight, value)
                tiles.setTileAt(value, assets.tile`myTile18`)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
                tiles.setTileAt(value, assets.tile`transparency16`)
            }
        }
    }
}
function EnemyFunction () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        Skeleton_Ghost = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 d f . . . 
            . . f d 1 1 1 1 1 1 1 d d f . . 
            . . f d 1 1 1 1 1 1 d d d f . . 
            . . f d 1 1 1 d d d d d d f . . 
            . . f d 1 d 2 f d d d d b f . . 
            . . f b d d f f d b b b c f . . 
            . . . f 1 1 1 1 1 b b c f . . . 
            . . . f 1 b 1 f f f f f . . . . 
            . . . f b f c 1 1 1 b f . . . . 
            . . . . f f 1 b 1 b f f . . . . 
            . . . . . f b f b f f f . f . . 
            . . . . . . f f f f f f f f . . 
            . . . . . . . . f f f f f . . . 
            `, SpriteKind.FlyingEnemy)
        Skeleton_Ghost.startEffect(effects.starField, 500)
        Skeleton_Ghost.vx = 150
        Ghost_Skeleton_Sprite_Animation()
        tiles.placeOnTile(Skeleton_Ghost, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        Snake = sprites.create(img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `, SpriteKind.Enemy)
        Snake.vx = -25
        tiles.placeOnTile(Snake, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        Bat = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.batman)
        Bat.vy += 50
        tiles.placeOnTile(Bat, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        DargonTheDragon = sprites.create(img`
            ................................
            ................................
            .................ccc............
            ...............cccc.............
            ...............ccc..............
            ..............cccccc.ccccc......
            .............cccbbbccccccc......
            ...........cccbbb777cc..........
            .........ccc6bb772277bc.........
            ........cc66b77722777bc.........
            .......cc6f7777777777bc.........
            ........c6b7f77bbb777bc.........
            ........c66bbbbbcc777bc.........
            .........cc66ffc7777bcc.........
            ..........cccc77777bcc..........
            ............cc77777bc...........
            ...........cc77777bc....cc......
            .......cccccccccc7cc....cc......
            .......c77c444cc77cbc...cbc.....
            .......ccccc44c777cbc...cbc.....
            .........c4cccc7c7c7bcccb7c.....
            .........c444c77ccc77bccb7c.....
            .........c444c77777777bb77c.....
            .........ccccc77c777777777c.....
            .......cccc4cc7cc777c77777c.....
            .......c66cc44cc7777cccccc......
            .......cc66cccc7777cc...........
            ........ccccccc7777c............
            .............c7777cc............
            .............cccccc.............
            ................................
            ................................
            `, SpriteKind.TheDragon)
        animation.runImageAnimation(
        DargonTheDragon,
        [img`
            ................................
            .................ccc............
            ...............cccc.............
            ...............ccc..............
            ..............cccccc.ccccc......
            .............cccbbbccccccc......
            ...........cccbbb777cc..........
            .........ccc6bb772277bc.........
            ........cc66b77722777bc.........
            .......cc6f7777777777bc.........
            ........c6b7f77bbb777bc.........
            ........c66bbbbbcc777bc.........
            .........cc66ffc7777bcc.........
            ..........cccc77777bcc..........
            ............cc77777bc...........
            ...........cc77777bc....cc......
            .......cccccccccc7cc....cc......
            .......c77c444cc77cbc...cbc.....
            .......ccccc44c777cbc...cbc.....
            .........c4cccc7c7c7bcccb7c.....
            .........c444c77ccc77bccb7c.....
            .........c444c77777777bb77c.....
            .........ccccc77c777777777c.....
            .......cccc4cc7cc777c77777c.....
            .......c66cc44cc7777cccccc......
            .......cc66cccc7777cc...........
            ........ccccccc7777c............
            .............c7777cc............
            .............cccccc.............
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            .................ccc............
            ...............cccc.............
            ...............ccc..............
            ..............cccccc.ccccc......
            .............cccbbbccccccc......
            ...........cccbbb777cc..........
            .........ccc6bb772277bc.........
            ........cc66b77722777bc.........
            .......cc6f7777777777bc.........
            ........c6b7f77bbb777bc.........
            ........c66bbbbbcc777bc.........
            .........cc66ffc7777bcc.........
            ..........cccc77777bcc..........
            ........cccccc77777bc..ccc......
            ........c77ccccc777c...cbc......
            ........ccc444ccc7cbc..cbc......
            .........ccc44c777cbcccb7c......
            .........c4cccc777c7bccb7c......
            .........c444c77c7c77bb77c......
            .........c444c77ccc777777c......
            .........ccccc77c77777777c......
            ........cccccc7cc777ccccc.......
            ........c66c4cc7777ccc..........
            ........cc66cc7777ccc...........
            .........cccccccccc.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `],
        100,
        true
        )
        DargonTheDragon.changeScale(0.5, ScaleAnchor.Middle)
        DargonTheDragon.setVelocity(0, 25)
        tiles.placeOnTile(DargonTheDragon, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftSidedSpikeBlock, function (sprite, otherSprite) {
    PlayersHealth.value += -15
    pause(2000)
})
let FallingObjects: Sprite = null
let DargonTheDragon: Sprite = null
let Bat: Sprite = null
let Snake: Sprite = null
let Skeleton_Ghost: Sprite = null
let Star3Collected: Sprite = null
let Star2Collected: Sprite = null
let Star1Collected: Sprite = null
let Fireball: Sprite = null
let LavaBlock: Sprite = null
let SpringJump: Sprite = null
let Spike: Sprite = null
let UpsideDownSpike: Sprite = null
let RightSidedSpike: Sprite = null
let LeftSidedSpike: Sprite = null
let UI2: Sprite = null
let UI: Sprite = null
let mySprite: Sprite = null
let Random_Value_Number_ = 0
let UI3: Sprite = null
let Knight: Sprite = null
let Checkpoint_Flag: Sprite = null
let Coin: Sprite = null
let TreasureChest: Sprite = null
let Star: Sprite = null
let PlayersHealth: StatusBarSprite = null
let CheckpointReached = 0
let Amount_Of_Stars = 0
info.setLife(3)
info.setScore(0)
let CurrentLevel = 0
Amount_Of_Stars = 0
CheckpointReached = 0
let BonusCoinsAwarded = 0
The_Whole_Game()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.FlyingEnemy)) {
        value.ay = 0
        characterAnimations.loopFrames(
        value,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        value,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......fd1111111f.......
            ......fdd1111111df......
            ......fddd111111df......
            ......fdddddd111df......
            ......fbddddbfd1df......
            ......fcbbbdcfddbf......
            .......fcbb11111f.......
            ........fffff1b1f.......
            ........fb111cfbf.......
            ........ffb1b1ff........
            ......f.fffbfbf.........
            ......ffffffff..........
            .......fffff............
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff11111f........
            .......fb111111bf.......
            ......fbd1111111f.......
            ......fddd111111df......
            ......fdddd11111df......
            ......fddddddd11df......
            ......fddddddd111f......
            ......fddddddcf11f......
            .......fbdddb1111bf.....
            ........fffcfdb1b1f.....
            .......ffffffffbfbf.....
            ....ff.fffffffffff......
            .....ffffffff...........
            .....ffffffb1b1f........
            ......ffffffbfbf........
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -50
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 50
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.ay = 600
        characterAnimations.loopFrames(
        value,
        [img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `,img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        value,
        [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `,img`
            . . . . . . . c c c c c c . . . 
            . . . . . . c 6 7 7 7 7 6 c . . 
            . . . . . c 7 7 7 7 7 7 7 7 c . 
            . . . . c 6 7 7 7 7 7 7 7 7 6 c 
            . . . . c 7 7 7 c 6 6 6 6 c 7 c 
            . . . . f 7 7 7 6 f 6 6 f 6 7 f 
            . . . . f 7 7 7 7 7 7 7 7 7 7 f 
            . . . . f 6 7 7 c 6 7 7 7 7 f . 
            . . c c c f 6 7 7 c c c c f . . 
            . c 7 7 7 c c f 7 7 7 2 6 c . . 
            c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
            c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
            . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
            . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
            . . c c 6 6 7 1 1 1 1 1 6 c . . 
            . . . c c c c c c c c c c . . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -25
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 25
        }
    }
})
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        if (Knight.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`)) {
            tiles.setWallAt(value, true)
        } else if (Knight.tileKindAt(TileDirection.Top, assets.tile`myTile9`)) {
            tiles.setWallAt(value, false)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        if (controller.down.isPressed()) {
            if (Knight.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`)) {
                tiles.setWallAt(value, false)
            } else if (Knight.tileKindAt(TileDirection.Top, assets.tile`myTile9`)) {
                tiles.setWallAt(value, true)
            }
        }
    }
})
game.onUpdate(function () {
    if (Amount_Of_Stars == 1) {
        Star1Collected.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . 2 5 2 . . . . . . 
            . . . . 2 2 2 5 1 1 2 2 2 . . . 
            . . . . 2 5 5 5 1 1 5 5 2 . . . 
            . . . . . 2 2 5 5 5 2 2 . . . . 
            . . . . . 2 2 5 5 5 2 2 . . . . 
            . . . . . 2 5 2 2 2 5 2 . . . . 
            . . . . . 2 2 . . . 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        if (Amount_Of_Stars == 2) {
            Star2Collected.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . 8 5 8 . . . . . . 
                . . . . 8 8 8 5 1 1 8 8 8 . . . 
                . . . . 8 5 5 5 1 1 5 5 8 . . . 
                . . . . . 8 8 5 5 5 8 8 . . . . 
                . . . . . 8 8 5 5 5 8 8 . . . . 
                . . . . . 8 5 8 8 8 5 8 . . . . 
                . . . . . 8 8 . . . 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            if (Amount_Of_Stars == 3) {
                effects.confetti.startScreenEffect(3000)
                Star3Collected.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 4 . . . . . . . 
                    . . . . . . . 4 5 4 . . . . . . 
                    . . . . 4 4 4 5 1 1 4 4 4 . . . 
                    . . . . 4 5 5 5 1 1 5 5 4 . . . 
                    . . . . . 4 4 5 5 5 4 4 . . . . 
                    . . . . . 4 4 5 5 5 4 4 . . . . 
                    . . . . . 4 5 4 4 4 5 4 . . . . 
                    . . . . . 4 4 . . . 4 4 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
                UI2.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                    . 5 b b b b b b b b b b b b 5 . 
                    . 5 b b b b b b b b b b b b 5 . 
                    . 5 b b b b b b b b b b b b 5 . 
                    . 5 b b b b b b b b b b b b 5 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        }
    }
})
game.onUpdate(function () {
    if (Knight.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
        if (controller.up.isPressed()) {
            Knight.vy = -75
            Knight.setImage(img`
                . . . f f f f f f f f . . . . . 
                . . f e e e e e e e e f . . . . 
                . f e e e e e e e e e e f . . . 
                . f e e e e e e e e e e e f . . 
                . . f e e e e e e e e e e f . . 
                . f e e e e e e e e e e e f . . 
                . . . f e e e e e e e e e f . . 
                . . f e e e e e e e e e e f . . 
                . . f e f e e e e e e e f 2 f . 
                . . f d d c c c c c c f 2 f . . 
                . . f d d c c c c c c 2 f 2 f . 
                . . . f f c c c c c c f 2 . . . 
                . . . . f c c c c c c d d f . . 
                . . . . f b f b b b b f f . . . 
                . . . . f f f f f f b f . . . . 
                . . . . f f f . . f f f . . . . 
                `)
        } else if (controller.down.isPressed()) {
            Knight.vy = 75
            Knight.setImage(img`
                . . . . . f f f f f f f f . . . 
                . . . . f e e e e e e e e f . . 
                . . . f e e e e e e e e e e f . 
                . . f e e e e e e e e e e e f . 
                . . f e e e e e e e e e e f . . 
                . . f e e e e e e e e e e e f . 
                . . f e e e e e e e e e f . . . 
                . . f e e e e e e e e e e f . . 
                . f 2 f e e e e e e e f e f . . 
                . . f 2 f c c c c c c d d f . . 
                . f 2 f 2 c c c c c c d d f . . 
                . . . 2 f c c c c c c f f . . . 
                . . f d d c c c c c c f . . . . 
                . . . f f b b b b f b f . . . . 
                . . . . f b f f f f f f . . . . 
                . . . . f f f . . f f f . . . . 
                `)
        } else {
            Knight.vy = 0
            PlayersFunction()
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.FlyingEnemy)) {
        value.vy = 0
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -50
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 50
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.batman)) {
        if (value.isHittingTile(CollisionDirection.Top)) {
            value.vy = 50
            animation.runImageAnimation(
            value,
            [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c b b b b b b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b c b b b c b b b b f . . . . 
                f b 1 f f f 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c . . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f b 3 b c 3 b c f b b c c c . 
                . c b b b b b b c f b c b c c . 
                . c b b b b b b c b b c b b c . 
                c b 1 b b b 1 b b b c c c b c . 
                c b b b b b b b b c c c c c . . 
                f b c b b b c b b b b f c . . . 
                f b 1 f f f 1 b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . c b b b b b b b b f f . . . . 
                c c b b b b b b b b f f . . . . 
                c b 1 b b b 1 b b c f f f . . . 
                c b b b b b b b b f f f f . . . 
                f b c b b b c b c c b b b . . . 
                f b 1 f f f 1 b f c c c c . . . 
                . f b b b b b b f b b c c . . . 
                c c f b b b b b c c b b c . . . 
                c c c f f f f f f c c b b c . . 
                . c c c . . . . . . c c c c c . 
                . . c c c . . . . . . . c c c c 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c b 1 b b b 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `],
            100,
            true
            )
        } else if (value.isHittingTile(CollisionDirection.Bottom)) {
            value.vy = -50
            animation.runImageAnimation(
            value,
            [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b b b b b b c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c b b b c b c 
                . . . c f b b b b 1 f f f 1 b f 
                . . c c f b b b b b b b b b b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . . c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 b f f 
                . c c b c b f c b b b b b b c . 
                . c b b c b b c b b b b b b c . 
                . c b c c c b b b 1 b b b 1 b c 
                . . c c c c c b b b b b b b b c 
                . . . c f b b b b c b b b c b f 
                . . c c f b b b b 1 f f f 1 b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b b 1 b b b 1 b c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `],
            100,
            true
            )
        }
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        if (Math.percentChance(30)) {
            FallingObjects = sprites.create(img`
                . . . . . . c c c . . . . . . . 
                . . . . . a a a c c c . . . . . 
                . . . c a c f a a a a c . . . . 
                . . c a c f f f a f f a c . . . 
                . c c a c c f a a c f f a c . . 
                . a b a a c 6 a a c c f a c c c 
                . a b b b 6 a b b a a c a f f c 
                . . a b b a f f b b a a c f f c 
                c . a a a c c f c b a a c f a c 
                c c a a a c c a a a b b a c a c 
                a c a b b a a 6 a b b 6 b b c . 
                b a c b b b 6 b c . c c a c . . 
                b a c c a b b a c . . . . . . . 
                b b a c a b a a . . . . . . . . 
                a b 6 b b a c . . . . . . . . . 
                . a a b c . . . . . . . . . . . 
                `, SpriteKind.FallingObjects)
            animation.runImageAnimation(
            FallingObjects,
            [img`
                . . . . . . c c c . . . . . . . 
                . . . . . a a a c c c . . . . . 
                . . . c a c f a a a a c . . . . 
                . . c a c f f f a f f a c . . . 
                . c c a c c f a a c f f a c . . 
                . a b a a c 6 a a c c f a c c c 
                . a b b b 6 a b b a a c a f f c 
                . . a b b a f f b b a a c f f c 
                c . a a a c c f c b a a c f a c 
                c c a a a c c a a a b b a c a c 
                a c a b b a a 6 a b b 6 b b c . 
                b a c b b b 6 b c . c c a c . . 
                b a c c a b b a c . . . . . . . 
                b b a c a b a a . . . . . . . . 
                a b 6 b b a c . . . . . . . . . 
                . a a b c . . . . . . . . . . . 
                `,img`
                . a b b b a c c . . . . . . . . 
                a b b a a c c . . a a c . . . . 
                a 6 a c c a a a a b b c c . . . 
                b b c c b b a a b b a a a c . . 
                c b a a b b a a b b a c c a . . 
                . a b b b a c c a 6 c c f c a . 
                . c a b 6 a c c f a 6 f f f a c 
                . . a a b 6 a f f b a a f a a c 
                . . . c c a a c b b a a a a c c 
                . . . . . b a b b a c c f a c . 
                . . . . c b b a a a c f f a c . 
                . . . . c 6 b a a c f f a c . . 
                . . . . a b a c c a a a c . . . 
                . . . . c b c f f f c c . . . . 
                . . . . . c a a f f c . . . . . 
                . . . . . . c c c c c . . . . . 
                `,img`
                . . . . . . . . . . . c b a a . 
                . . . . . . . . . c a b b 6 b a 
                . . . . . . . . a a b a c a b b 
                . . . . . . . c a b b a c c a b 
                . . c a c c . c b 6 b b b c a b 
                . c b b 6 b b a 6 a a b b a c a 
                c a c a b b a a a c c a a a c c 
                c a f c a a b c f c c a a a . c 
                c f f c a a b b f f a b b a . . 
                c f f a c a a b b a 6 b b b a . 
                c c c a f c c a a 6 c a a b a . 
                . . c a f f c a a f c c a c c . 
                . . . c a f f a f f f c a c . . 
                . . . . c a a a a f c a c . . . 
                . . . . . c c c a a a . . . . . 
                . . . . . . . c c c . . . . . . 
                `,img`
                . . . . . c c c c c . . . . . . 
                . . . . . c f f a a c . . . . . 
                . . . . c c f f f c b c . . . . 
                . . . c a a a c c a b a . . . . 
                . . c a f f c a a b 6 c . . . . 
                . c a f f c a a a b b c . . . . 
                . c a f c c a b b a b . . . . . 
                c c a a a a b b c a a c c . . . 
                c a a f a a b f f a 6 b a a . . 
                c a f f f 6 a f c c a 6 b a c . 
                . a c f c c 6 a c c a b b b a . 
                . . a c c a b b a a b b a a b c 
                . . c a a a b b a a b b c c b b 
                . . . c c b b a a a a c c a 6 a 
                . . . . c a a . . c c a a b b a 
                . . . . . . . . c c a b b b a . 
                `],
            100,
            true
            )
            FallingObjects.setFlag(SpriteFlag.AutoDestroy, true)
            FallingObjects.setFlag(SpriteFlag.GhostThroughWalls, true)
            FallingObjects.setVelocity(0, 100)
            tiles.placeOnTile(FallingObjects, value)
            pause(5000)
        }
    }
})
forever(function () {
    if (Amount_Of_Stars == 3) {
        for (let index = 0; index < 100; index++) {
            info.changeScoreBy(1)
            BonusCoinsAwarded += 1
        }
        if (BonusCoinsAwarded == 5000) {
            info.changeCountdownBy(120)
            info.changeLifeBy(3)
            pauseUntil(() => false)
        }
    }
})
