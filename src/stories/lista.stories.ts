import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { ListaComponent } from "src/app/componentes/lista/lista.component";

export default {
    title: 'Componentes/Lista',
    component: ListaComponent,
    argTypes: {},
    decorators: [
      moduleMetadata({
        declarations: [ListaComponent],
        imports: []
      })
    ]
} as Meta;
  
const Template: Story<ListaComponent> = (args: ListaComponent) => ({
props: args,
template: ` <app-lista [textoOpcional2]=textoOpcional2 [to2]=to2 [textoPrincipal]=textoPrincipal [textoOpcional]=textoOpcional [icono]=icono></app-lista>`
});
  
export const Lista = Template.bind({});
Lista.args = {
    textoPrincipal: "Principal",
    textoOpcional: "Detalle",
    icono:"si"
};

export const ListaDisableIcono = Template.bind({});
ListaDisableIcono.args = {
    textoPrincipal: "Principal",
    textoOpcional: "Detalle",
};

export const ListaDetalleFalseEnableIcono = Template.bind({});
ListaDetalleFalseEnableIcono.args = {
    textoPrincipal: "Principal",
    icono:"si"
};

export const ListaDetalleFalse = Template.bind({});
ListaDetalleFalse.args = {
    textoPrincipal: "Principal",
}

export const ListaDetalleSecundarioTrue = Template.bind({});
ListaDetalleSecundarioTrue.args = {
    textoPrincipal: "Principal",
    textoOpcional: "Detalle",
    textoOpcional2: "Secundario",
}

export const ListaSecundarioTrue = Template.bind({});
ListaSecundarioTrue.args = {
    textoPrincipal: "Principal",
    textoOpcional2: "Secundario",
}

export const ListaDetalleSecundarioTo2True = Template.bind({});
ListaDetalleSecundarioTo2True.args = {
    textoPrincipal: "Principal",
    textoOpcional: "Detalle",
    textoOpcional2: "Secundario",
    to2: "true"
}

export const ListaSecundarioTo2True = Template.bind({});
ListaSecundarioTo2True.args = {
    textoPrincipal: "Principal",
    textoOpcional2: "Secundario",
    to2: "true"
}
    
