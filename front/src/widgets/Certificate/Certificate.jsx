import React, { useEffect, useRef } from 'react';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import certificate from 'shared/assets/img/certificate.png'
import cls from './Certificate.module.css'





export const Certificate = (props) => {
    const { className, name } = props
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

  
      const resizeCanvas = () => {
        canvas.width = window.innerWidth; // Установка ширины канваса равной ширине окна
        canvas.height = canvas.width * (certificateImage.height / certificateImage.width); // Подгонка высоты канваса для сохранения пропорций
  
        // Рисование изображения на canvas
        context.drawImage(certificateImage, 0, 0, canvas.width, canvas.height);
  
        const fontSize = canvas.width * 0.025 
        // Настройка параметров текста
        context.font = `600 ${fontSize}px 'Montserrat'`;
        context.fillStyle = '#480660';
        context.textAlign = 'center';
  
        // Рисование имени на сертификате
        context.fillText(name, canvas.width / 3.9, canvas.height / 1.7);
      };
  
      const certificateImage = new Image();
      certificateImage.src = certificate; // Укажите путь к изображению сертификата
      certificateImage.onload = function () {
        resizeCanvas(); // Изначальное масштабирование канваса
  
        // Перемасштабирование канваса при изменении размера окна
        window.addEventListener('resize', resizeCanvas);
      };
  
      return () => {
        window.removeEventListener('resize', resizeCanvas); // Удаление обработчика события при размонтировании компонента
      };
    }, [name]);

    const DownloadCertificate = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'certificate.png'; // Установка имени файла для скачивания
        link.href = canvas.toDataURL(); // Получение данных из canvas в формате Data URL
        link.click();
      };

    
  
    return (
        <div className={cls.container}>
            <canvas ref={canvasRef} style={{ width: '100%', height: 'auto' }} className={cls.canvas} />
            { certificate && <Button 
                theme={ButtonTheme.LIGHT} 
                onClick={DownloadCertificate}
                className={cls.button}
            > 
                Скачать сертификат 
            </Button> }
        </div>
    )
  };
  
