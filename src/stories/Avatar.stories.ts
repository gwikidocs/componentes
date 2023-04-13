import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AvatarComponent } from 'src/app/componentes/avatar/avatar.component';
import { BuscadorComponent } from 'src/app/componentes/buscador/buscador.component';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { TextfieldComponent } from 'src/app/componentes/textfield/textfield.component';

export default {
  title: 'Componentes/Avatar',
  component: AvatarComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [AvatarComponent],
      imports: []
    })
  ]
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
  template: `<app-avatar [texto]=textoAvatar [disabled]=textdisabled></app-avatar>`
});

export const Avatar = Template.bind({});
Avatar.args = {
    textoAvatar: "FG",
};

export const AvatarDisabled = Template.bind({});
AvatarDisabled.args = {
    textoAvatar: "FG",
    textdisabled: "true",
};