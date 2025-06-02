namespace SpriteKind {
    export const FlyingEnemy = SpriteKind.create()
    export const Chest = SpriteKind.create()
    export const FallingObjects = SpriteKind.create()
    export const Map = SpriteKind.create()
    export const UI1 = SpriteKind.create()
    export const KillBlock = SpriteKind.create()
    export const fg = SpriteKind.create()
    export const Collectable = SpriteKind.create()
}
function Status_Bar () {
    PlayersHealth = statusbars.create(20, 4, StatusBarKind.Health)
    PlayersHealth.value = 100
    PlayersHealth.setPosition(15, 110)
    PlayersHealth.setLabel("HP")
    PlayersHealth.setBarSize(20, 5)
}
function Valuables () {
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
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
        animation.runImageAnimation(
        Star,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f b b f . . . . . . 
            . . . . . f b 5 5 b f . . . . . 
            . . f f f b b 5 5 b b f f f . . 
            . f b b b b 5 5 1 1 b b b b f . 
            . f b 5 5 5 5 5 1 1 5 5 5 b f . 
            . f b d d 5 5 5 5 5 5 d d b f . 
            . . f b d d 5 5 5 5 d d b f . . 
            . . f c b 5 5 5 5 5 5 b c f . . 
            . . f c b 5 5 5 5 5 5 b c f . . 
            . . f c 5 5 d d d d 5 5 c f . . 
            . . f c 5 d d c c d d 5 c f . . 
            . . f c c c c f f c c c c f . . 
            . . . f f f f . . f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
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
            `],
        300,
        true
        )
        tiles.placeOnTile(Star, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
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
        tiles.placeOnTile(TreasureChest, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
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
            . . . . . . c c c c . . . . . . 
            . . . . . c 4 4 4 4 c . . . . . 
            . . . . c 4 5 5 5 5 4 c . . . . 
            . . . c 4 5 5 4 4 5 5 4 c . . . 
            . . . c 4 5 4 5 5 4 5 4 c . . . 
            . . . c 4 5 4 5 5 5 5 4 c . . . 
            . . . c 4 5 4 5 5 5 5 4 c . . . 
            . . . c 4 5 4 5 5 5 5 4 c . . . 
            . . . c 4 5 4 5 5 5 5 4 c . . . 
            . . . c 4 5 4 5 5 4 5 4 c . . . 
            . . . c 4 5 5 4 4 5 5 4 c . . . 
            . . . . c 4 5 5 5 5 4 c . . . . 
            . . . . . c 4 4 4 4 c . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . c 4 c . . . . . . 
            . . . . . . c 4 4 4 c . . . . . 
            . . . . . c 4 5 4 5 4 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 4 5 4 5 4 c . . . . 
            . . . . . . c 4 4 4 c . . . . . 
            . . . . . . . c 4 c . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c 4 4 4 4 c . . . . . 
            . . . . c 4 5 5 5 5 4 c . . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . c 4 5 5 5 5 5 5 4 c . . . 
            . . . . c 4 5 5 5 5 4 c . . . . 
            . . . . . c 4 4 4 4 c . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . c 4 c . . . . . . 
            . . . . . . c 4 4 4 c . . . . . 
            . . . . . c 4 5 4 5 4 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 5 5 4 5 5 c . . . . 
            . . . . . c 4 5 4 5 4 c . . . . 
            . . . . . . c 4 4 4 c . . . . . 
            . . . . . . . c 4 c . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
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
    music.stopAllSounds()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.KillBlock, function (sprite, otherSprite) {
    sprite.sayText("AHHHH!", 1000, true)
    for (let index = 0; index < 15; index++) {
        sprite.startEffect(effects.fire, 4000)
    }
    for (let index = 0; index < 4; index++) {
        PlayersHealth.value += -5
        pause(1000)
    }
})
info.onScore(1000, function () {
    info.changeLifeBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Knight.vy == 0) {
        Knight.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    Random_Value_Number_ = randint(0, 0)
    if (Random_Value_Number_ == 0) {
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
info.onCountdownEnd(function () {
    CleanUp()
    game.setGameOverMessage(false, "The Tower Collapsed")
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
    game.gameOver(false)
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
}
function Music () {
    music.play(music.createSong(hex`0082000408040205001c000f0a006400f4010a0000040000000000000000000000000000000002c00000000400012904000800012408000c0001200c001000011d10001400011414001800010c18001c0001081c002000010520002400012924002800012428002c0001202c003000011d30003400011434003800010c38003c0001083c004000010540004400011d44004800012048004c0001244c005000012950005400010654005800010a58005c00010d5c006000011460006400011d64006800012068006c0001246c007000012970007400010674007800010a78007c00010d7c008000011409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001800000001000103200021000109400041000103600061000109`), music.PlaybackMode.LoopingInBackground)
}
function The_Whole_Game () {
    info.startCountdown(120)
    scene.setBackgroundColor(11)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraShake(2, 5000)
    PlayersFunction()
    EnemyFunction()
    Valuables()
    Music()
    Status_Bar()
    Obstacles()
}
info.onScore(10000, function () {
	
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
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    CleanUp()
    The_Whole_Game()
})
function Obstacles () {
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
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
}
info.onScore(2500, function () {
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    PlayersHealth.value += -50
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FlyingEnemy, function (sprite, otherSprite) {
    PlayersHealth.value += -50
    pause(1000)
})
info.onLifeZero(function () {
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
info.onScore(5000, function () {
    info.changeLifeBy(1)
})
function PlayersFunction () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(randint(25, 100))
    sprites.destroy(otherSprite)
})
function EnemyFunction () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
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
        Skeleton_Ghost.vx = -10
        Skeleton_Ghost.setFlag(SpriteFlag.GhostThroughWalls, true)
        Ghost_Skeleton_Sprite_Animation()
        tiles.placeOnTile(Skeleton_Ghost, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
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
        Snake.vx = -50
        tiles.placeOnTile(Snake, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
let FallingObjects: Sprite = null
let Snake: Sprite = null
let Skeleton_Ghost: Sprite = null
let LavaBlock: Sprite = null
let mySprite: Sprite = null
let Random_Value_Number_ = 0
let Knight: Sprite = null
let Coin: Sprite = null
let TreasureChest: Sprite = null
let Star: Sprite = null
let PlayersHealth: StatusBarSprite = null
info.setLife(3)
info.setScore(0)
The_Whole_Game()
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.FlyingEnemy)) {
        value.vy += 100
        pause(100)
        value.vy += -100
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.FlyingEnemy)) {
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -25
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 25
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -25
            animation.runImageAnimation(
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
            100,
            true
            )
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 25
            animation.runImageAnimation(
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
            100,
            true
            )
        }
    }
})
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        if (Knight.tileKindAt(TileDirection.Bottom, assets.tile`myTile8`)) {
            tiles.setWallAt(value, true)
        } else if (Knight.tileKindAt(TileDirection.Top, assets.tile`myTile8`)) {
            tiles.setWallAt(value, false)
        }
    }
})
game.onUpdate(function () {
    if (Knight.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
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
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
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
