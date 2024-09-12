var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KelurahanSetiamanah_1 = new ol.format.GeoJSON();
var features_KelurahanSetiamanah_1 = format_KelurahanSetiamanah_1.readFeatures(json_KelurahanSetiamanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanSetiamanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanSetiamanah_1.addFeatures(features_KelurahanSetiamanah_1);
var lyr_KelurahanSetiamanah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanSetiamanah_1, 
                style: style_KelurahanSetiamanah_1,
                popuplayertitle: "Kelurahan Setiamanah",
                interactive: true,
                title: '<img src="styles/legend/KelurahanSetiamanah_1.png" /> Kelurahan Setiamanah'
            });
var format_KawasanSebaranJentik_2 = new ol.format.GeoJSON();
var features_KawasanSebaranJentik_2 = format_KawasanSebaranJentik_2.readFeatures(json_KawasanSebaranJentik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanSebaranJentik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanSebaranJentik_2.addFeatures(features_KawasanSebaranJentik_2);
var lyr_KawasanSebaranJentik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanSebaranJentik_2, 
                style: style_KawasanSebaranJentik_2,
                popuplayertitle: "Kawasan Sebaran Jentik",
                interactive: true,
                title: '<img src="styles/legend/KawasanSebaranJentik_2.png" /> Kawasan Sebaran Jentik'
            });
var format_SebaranTitikJentik_3 = new ol.format.GeoJSON();
var features_SebaranTitikJentik_3 = format_SebaranTitikJentik_3.readFeatures(json_SebaranTitikJentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranTitikJentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranTitikJentik_3.addFeatures(features_SebaranTitikJentik_3);
var lyr_SebaranTitikJentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranTitikJentik_3, 
                style: style_SebaranTitikJentik_3,
                popuplayertitle: "Sebaran Titik Jentik",
                interactive: true,
                title: '<img src="styles/legend/SebaranTitikJentik_3.png" /> Sebaran Titik Jentik'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_KelurahanSetiamanah_1.setVisible(true);lyr_KawasanSebaranJentik_2.setVisible(true);lyr_SebaranTitikJentik_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_KelurahanSetiamanah_1,lyr_KawasanSebaranJentik_2,lyr_SebaranTitikJentik_3];
lyr_KelurahanSetiamanah_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_KawasanSebaranJentik_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SebaranTitikJentik_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KelurahanSetiamanah_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_KawasanSebaranJentik_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SebaranTitikJentik_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_KelurahanSetiamanah_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_KawasanSebaranJentik_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SebaranTitikJentik_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SebaranTitikJentik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});