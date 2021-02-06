#!/bin/bash

oasis_scope="@oasis-engine"
oasis_libs=("core" "draco" "loader" "math" "rhi-webgl" "design" "stats" "framebuffer-picker" "controls" "tween")

js_lib_dir="javascript/lib"
oasis_lib_dir="$js_lib_dir/oasis"
oasis_types_dir="types"

rm -rf node_modules
npm install
rm -rf $oasis_lib_dir $oasis_types_dir
mkdir -p $oasis_lib_dir $oasis_types_dir

for lib in ${oasis_libs[*]}
do
    module="$oasis_scope/$lib"

    source="node_modules/$module/dist/module.js"
    dist="$oasis_lib_dir/$lib.js"

    types="node_modules/$module/types"
    typesDist="$oasis_types_dir/$lib"

    cp $source $dist
    cp "$source.map" "$dist.map"
    cp -r $types $typesDist

    for key in ${oasis_libs[*]} 
    do 
        sed -i "" "s/$oasis_scope\/$key/\.\/$key.js/" $dist
    done

    sed -i "" "s/oasis-engine/.\/oasis-engine.js/" $dist
done

cp node_modules/oasis-engine/dist/module.js "$oasis_lib_dir/oasis-engine.js"
cp node_modules/oasis-engine/dist/module.js.map "$oasis_lib_dir/oasis-engine.js.map"
cp -r node_modules/oasis-engine/types "$oasis_types_dir/oasis-engine"
for key in ${oasis_libs[*]}
do
    sed -i "" "s/$oasis_scope\/$key/\.\/$key.js/" "$oasis_lib_dir/oasis-engine.js"
done