import { Component, Vue } from 'vue-property-decorator';

@Component<World>({
    name: 'World',
})
export default class World extends Vue {
    world() {
        console.log('world!');
    }
}
