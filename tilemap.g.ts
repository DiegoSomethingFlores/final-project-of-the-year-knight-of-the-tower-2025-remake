// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140014000101010101010101010101010101010101010101010000000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000500000000000000000000000000010101010101050100000000000000000000000001010101000005010000000000000000000000000101010003030501000000000000000000000000010100030001010100000000000000000000000501010100030001010000000000000000000000050101010100030001000000000000080000000005010101010103010105090009000009090000090901010a030303010105010606060606060606060606010101010101010500010101010101010101010101010101010101050000000000000000000000010100000000000005000000000000000000040101010000000003030500000000000000010101010101000200030000050000010707070707070707010101010101010101010101060606060606060606`, img`
....................
....................
....................
2..................2
2..................2
2..................2
22222.2............2
222...2............2
22....2....222222..2
2...222.....222222.2
22...22............2
222...2............2
2222.22.2.2..22..222
2....22.2..........2
2222222..22222222222
2222222............2
2.................22
2..............22222
2.........2222222222
22222222222........2
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile3,myTiles.tile4,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile2,myTiles.tile10,myTiles.tile12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
