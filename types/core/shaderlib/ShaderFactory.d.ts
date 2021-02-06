declare class ShaderFactory {
    /**
     * GLSL version.
     * @param {string} version - "100" | "300 es"
     * */
    static parseVersion(version?: string): string;
    static parsePrecision(vertP: string, fragP: string, compileVert?: boolean): string;
    static parseShaderName(name: any): string;
    static parseAttributeMacros(macros: any): string;
    static parseCustomMacros(macros: string[]): string;
    static parseShader(src: any): any;
    static parseIncludes(src: any): any;
    static InjectShaderSlices(slices: any): void;
    /**
     * GLSL extension.
     * @param {string[]} extensions - such as ["GL_EXT_shader_texture_lod"]
     * */
    static parseExtension(extensions: string[]): string;
    /**
     * Convert lower GLSL version to GLSL 300 es.
     * @param shader - code
     * @param isFrag - Whether it is a fragment shader.
     * */
    static convertTo300(shader: string, isFrag?: boolean): string;
    /**
     * Returns the length of the draw buffer in the corresponding shaderCode.
     * @param shader - shader code
     */
    static getMaxDrawBuffers(shader: string): number;
    /**
     * Compatible with gl_FragColor and gl_FragData simultaneous errors.
     * */
    static compatible(fragmentShader: string): string;
    private static replaceMRTShader;
}
export { ShaderFactory };
