import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BuscadorComponent } from 'src/app/componentes/buscador/buscador.component';
import { HeaderComponent } from 'src/app/componentes/header/header.component';

export default {
  title: 'Componentes/Buscador',
  component: BuscadorComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [BuscadorComponent],
      imports: []
    })
  ]
} as Meta;

const Template: Story<BuscadorComponent> = (args: BuscadorComponent) => ({
  props: args,
  template: `<app-buscador [textPlaceholder]=textPlaceholder></app-buscador>`
});

export const Buscador = Template.bind({});
Buscador.args = {
    textPlaceholder: "Nombre",
};