import { Vue, Component } from 'vue-property-decorator';
import Hello from './Hello.vue';
import World from './World.vue';

@Component<App>({
    name: 'App',
    components: {
        Hello,
        World,
    },
    mounted() {
        this.$refs.c1.hello(); // use './Hello.vue', IntelliSense failure

        // this.$refs.c2.world(); // d.ts invalid
    },
})
export default class App extends Vue {
    $refs!: {
        c1: Hello;
        c2: World;
    };
}

if (!(<any>window)['dev']) (<any>window)['dev'] = {};
Object.assign((<any>window)['dev'], {
    Hello,
    World,
});
