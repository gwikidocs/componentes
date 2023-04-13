import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'src/app/componentes/header/header.component';

export default {
  title: 'Componentes/Header',
  component: HeaderComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: []
    })
  ]
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
  template: `<app-header [tipo]=tipoHeader [version]=version></app-header>`
});

export const Desktop = Template.bind({});
Desktop.args = {
  tipoHeader: "desktopHB",
};

export const DesktopVersion = Template.bind({});
DesktopVersion.args = {
    tipoHeader: "desktopHB",
    version: "1.0.0 V2"
};