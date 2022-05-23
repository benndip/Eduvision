// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// module.exports = getDefaultConfig(__dirname);
module.exports = (async () => {
    const {
      resolver: { assetExts }
    } = await getDefaultConfig(__dirname);
  
    return {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false,
          },
        }),
      },
      resolver: {
        sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
        assetExts: [...assetExts, "stl", "fbx", "c4d", "obj", "mtl", "JPG", "vrx", "hdr", "gltf", "glb", "bin", "arobject", "gif", "blend","png"]
      }
    }
  })();