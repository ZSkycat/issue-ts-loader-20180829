import { Component, Vue } from 'vue-property-decorator';

@Component<Hello>({
    name: 'Hello',
})
export default class Hello extends Vue {
    hello() {
        console.log('hello!');
    }
}
