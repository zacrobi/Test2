var wms_layers = [];


        var lyr_Mapssatelite_0 = new ol.layer.Tile({
            'title': 'Maps satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_test_2 = new ol.format.GeoJSON();
var features_test_2 = format_test_2.readFeatures(json_test_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_2.addFeatures(features_test_2);
var lyr_test_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_2, 
                style: style_test_2,
                popuplayertitle: "test",
                interactive: true,
                title: '<img src="styles/legend/test_2.png" /> test'
            });

lyr_Mapssatelite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_test_2.setVisible(true);
var layersList = [lyr_Mapssatelite_0,lyr_GoogleSatellite_1,lyr_test_2];
lyr_test_2.set('fieldAliases', {'id': 'id', 'Vérif': 'Vérif', });
lyr_test_2.set('fieldImages', {'id': '', 'Vérif': '', });
lyr_test_2.set('fieldLabels', {'id': 'no label', 'Vérif': 'no label', });
lyr_test_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});