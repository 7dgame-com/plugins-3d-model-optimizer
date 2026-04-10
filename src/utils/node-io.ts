import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

import { getDracoModules } from '../components/draco-singleton';

/**
 * Creates a NodeIO instance with the commonly used glTF extensions
 * pre-registered so required extensions like EXT_texture_webp can be read.
 */
export async function createNodeIO(): Promise<NodeIO> {
  return new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies(await getDracoModules());
}
