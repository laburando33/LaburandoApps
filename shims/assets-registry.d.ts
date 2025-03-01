const registry = new Map()

export function registerAsset(asset) {
  if (typeof asset.uri === "string" && asset.uri.startsWith("data:")) {
    return asset
  }
  const id = asset.id || asset.uri
  registry.set(id, asset)
  return id
}

export function getAssetByID(assetId) {
  return registry.get(assetId)
}

export function getAssetByURI(uri) {
  for (const asset of registry.values()) {
    if (asset.uri === uri) {
      return asset
    }
  }
  return null
}

export const unstable_getAssetMetadata = () => null

export default {
  registerAsset,
  getAssetByID,
  getAssetByURI,
  unstable_getAssetMetadata,
}

