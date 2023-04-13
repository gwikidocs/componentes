import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BuscadorComponent } from 'src/app/componentes/buscador/buscador.component';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { TextfieldComponent } from 'src/app/componentes/textfield/textfield.component';

export default {
  title: 'Componentes/Textfield',
  component: TextfieldComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [TextfieldComponent],
      imports: []
    })
  ]
} as Meta;

const Template: Story<TextfieldComponent> = (args: TextfieldComponent) => ({
  props: args,
  template: `<app-textfield [textLabel1]=textUno [textLabel2]=textDos [textPlaceholder]=placeholder [disabled]=textdisabled></app-textfield>`
});

export const Textfield = Template.bind({});
Textfield.args = {
    textUno: "Nombre",
    textDos: "Apellido",
    placeholder: "Ingrese su nombre",
    textdisabled: "true",
};