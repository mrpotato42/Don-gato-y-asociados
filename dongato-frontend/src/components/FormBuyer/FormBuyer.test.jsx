import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FormBuyer from './FormBuyer';

// Agrupamos nuestras pruebas en una suite llamada 'FormBuyer'
describe('FormBuyer', () => {
    // Esta prueba verifica que todos los campos del formulario se renderizan correctamente
    it('renders the form fields', () => {
        // Renderizamos el componente
        render(
            <FormBuyer />
        );
        // Buscamos cada campo del formulario por su etiqueta
        const nameInput = screen.getByLabelText('Nombre');
        const phoneInput = screen.getByLabelText('Teléfono');
        const emailInput = screen.getByLabelText('Email');
        const emailConfirmInput = screen.getByLabelText('Confirmar Email');
        // Buscamos el botón de compra por su rol y nombre
        const buyButton = screen.getByRole('button', { name: 'Comprar' });
        // Verificamos que cada campo y el botón estén presentes en el documento
        expect(nameInput).toBeInTheDocument();
        expect(phoneInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(emailConfirmInput).toBeInTheDocument();
        expect(buyButton).toBeInTheDocument();
    });

    // Esta prueba verifica que el botón de compra está deshabilitado cuando el formulario está incompleto
    it('disables the buy button when the form is incomplete', () => {
        render(
            <FormBuyer />
        );
        const buyButton = screen.getByRole('button', { name: 'Comprar' });
        expect(buyButton).toBeDisabled();
    });

    // Esta prueba verifica que el botón de compra se habilita cuando el formulario está completo
    it('enables the buy button when the form is complete', () => {
        render(
            <FormBuyer />
        );
        const nameInput = screen.getByLabelText('Nombre');
        const phoneInput = screen.getByLabelText('Teléfono');
        const emailInput = screen.getByLabelText('Email');
        const emailConfirmInput = screen.getByLabelText('Confirmar Email');
        const buyButton = screen.getByRole('button', { name: 'Comprar' });
        // Rellenamos cada campo del formulario
        fireEvent.change(nameInput, { target: { value: 'Pedrito Pedrazo' } });
        fireEvent.change(phoneInput, { target: { value: '1555555555' } });
        fireEvent.change(emailInput, { target: { value: 'pedrito@ejemplo.com' } });
        fireEvent.change(emailConfirmInput, { target: { value: 'pedrito@ejemplo.com' } });
        // Verificamos que el botón de compra esté habilitado
        expect(buyButton).toBeEnabled();
    });
});
