/**
 * Texture format enumeration.
 */
export declare enum TextureFormat {
    /** RGB format,8 bits per channel. */
    R8G8B8 = 0,
    /** RGBA format,8 bits per channel. */
    R8G8B8A8 = 1,
    /** RGBA format,4 bits per channel. */
    R4G4B4A4 = 2,
    /** RGBA format,5 bits in R channel,5 bits in G channel,5 bits in B channel, 1 bit in A channel. */
    R5G5B5A1 = 3,
    /** RGB format,5 bits in R channel,6 bits in G channel,5 bits in B channel. */
    R5G6B5 = 4,
    /** Transparent format,8 bits. */
    Alpha8 = 5,
    /** RGBA format,32 bits per channel. */
    R32G32B32A32 = 6,
    /** RGB compressed format。*/
    DXT1 = 7,
    /** RGBA compressed format。*/
    DXT5 = 8,
    /** RGB compressed format,4 bits per pixel。*/
    ETC1_RGB = 9,
    /** RGB compressed format,4 bits per pixel。*/
    ETC2_RGB = 10,
    /** RGBA compressed format,5 bits per pixel,4 bit in RGB, 1 bit in A. */
    ETC2_RGBA5 = 11,
    /** RGB compressed format,8 bits per pixel. */
    ETC2_RGBA8 = 12,
    /** RGB compressed format,2 bits per pixel. */
    PVRTC_RGB2 = 13,
    /** RGBA compressed format,2 bits per pixel. */
    PVRTC_RGBA2 = 14,
    /** RGB compressed format,4 bits per pixel. */
    PVRTC_RGB4 = 15,
    /** RGBA compressed format,4 bits per pixel. */
    PVRTC_RGBA4 = 16,
    /** RGB(A) compressed format,128 bits per 4x4 pixel block. */
    ASTC_4x4 = 17,
    /** RGB(A) compressed format,128 bits per 5x5 pixel block. */
    ASTC_5x5 = 18,
    /** RGB(A) compressed format,128 bits per 6x6 pixel block. */
    ASTC_6x6 = 19,
    /** RGB(A) compressed format,128 bits per 8x8 pixel block. */
    ASTC_8x8 = 20,
    /** RGB(A) compressed format,128 bits per 10x10 pixel block. */
    ASTC_10x10 = 21,
    /** RGB(A) compressed format,128 bits per 12x12 pixel block. */
    ASTC_12x12 = 22
}
