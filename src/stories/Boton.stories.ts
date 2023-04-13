import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BotonHbComponent } from 'src/app/componentes/boton-hb/boton-hb.component';

export default {
  title: 'Componentes/Boton',
  component: BotonHbComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [BotonHbComponent],
      imports: []
    })
  ]
} as Meta;

const Template: Story<BotonHbComponent> = (args: BotonHbComponent) => ({
  props: args,
  template: `<app-boton-hb [tipo]=tipoBoton [texto]=texto [icono]=icono></app-boton-hb>`
});

export const Principal = Template.bind({});
Principal.args = {
  tipoBoton: "principalHB",
  texto: "Aceptar"
};

export const Secundario = Template.bind({});
Secundario.args = {
  tipoBoton: "secundarioHB",
  texto: "Aceptar"
};

export const Terciario = Template.bind({});
Terciario.args = {
  tipoBoton: "terciarioHB",
  texto: "Aceptar"
};

export const PrincipalOff = Template.bind({});
PrincipalOff.args = {
  tipoBoton: "principalOff",
  texto: "Aceptar"
};

export const SecundarioOff = Template.bind({});
SecundarioOff.args = {
  tipoBoton: "secundarioOff",
  texto: "Aceptar"
};

export const TerciarioOff = Template.bind({});
TerciarioOff.args = {
  tipoBoton: "terciarioOff",
  texto: "Aceptar"
};

export const PrincipalIcono = Template.bind({});
PrincipalIcono.args = {
  tipoBoton: "principalHB",
  texto: "Aceptar",
  icono: "../assets/imagenes/iconodownloadblanco.svg"
};

export const SecundarioIcono = Template.bind({});
SecundarioIcono.args = {
  tipoBoton: "secundarioHB",
  texto: "Aceptar",
  icono: "../assets/imagenes/iconodownloadnaranja.svg"
};

export const TerciarioIcono = Template.bind({});
TerciarioIcono.args = {
  tipoBoton: "terciarioHB",
  texto: "Aceptar",
  icono: "../assets/imagenes/iconodownloadnaranja.svg"
};

export const PrincipalOffIcono = Template.bind({});
PrincipalOffIcono.args = {
  tipoBoton: "principalOff",
  texto: "Aceptar",
  icono: "../assets/imagenes/iconodownloadblanco.svg"
};

export const SecundarioOffIcono = Template.bind({});
SecundarioOffIcono.args = {
  tipoBoton: "secundarioOff",
  texto: "Aceptar",
  icono: "../assets/imagenes/iconodownloadgris.svg"
};

export const TerciarioOffIcono = Template.bind({});
TerciarioOffIcono.args = {
  tipoBoton: "terciarioOff",
  texto: "Aceptar",
  icono: "../assets/imagenes/iconodownloadgris.svg"
};