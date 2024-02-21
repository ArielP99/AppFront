import React from 'react';
import { View, Text, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const UploadPDF = () => {
    const CargarPDF = async () => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
            });

            const formData = new FormData();
            const file = docRes.assets[0].uri;

            formData.append("file", {
                uri: file,
                name: 'Archivo.pdf',
                type: 'application/pdf',
            });

            const opciones = {
                method: 'POST',
                body: formData,
            };

            const response = await fetch('http://192.168.100.208:5000/pdf', opciones);

            const data = await response.json();
            console.log("Response from server:", data);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
    return (
        <View>
            <Button title="Seleccionar y Cargar PDF" onPress={CargarPDF} />
        </View>
    );
};
export default UploadPDF;


//http://192.168.100.208:5000/pdf