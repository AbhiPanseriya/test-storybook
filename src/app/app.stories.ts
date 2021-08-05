import { AppComponent } from "./app.component";

export default {
    title: 'APP',
    component: AppComponent,
};

const Template = (args: AppComponent) => ({
    props: args,
});

export const btn = Template.bind({});