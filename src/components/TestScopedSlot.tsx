import { Component as VueComponent } from "vue-tsx-support";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class TestScopedSlot extends VueComponent<
    { what: string },
    {},
    { dafuq?: { data: string }; dafuqfuq?: { data: string } }
> {
    @Prop({ required: true, type: String })
    what!: string;

    frek = "";

    visibilityChanged(isVisible: boolean, entry: any) {
        console.log(isVisible);
        console.log(entry);
    }

    render() {
        return (
            <div>
                <div v-observe-visibility={this.visibilityChanged}>
                    {this.what}
                </div>
                <input v-model={this.frek} />
                <div>{this.frek}</div>
                <div
                    v-anime={{
                        rotate: "1turn",
                        duration: 2000,
                        loop: false
                    }}
                >
                    123234
                </div>
                {!!this.$scopedSlots.dafuq && (
                    <div>{this.$scopedSlots.dafuq({ data: "123" })}</div>
                )}
                {!!this.$scopedSlots.dafuqfuq && (
                    <div>{this.$scopedSlots.dafuqfuq({ data: "234" })}</div>
                )}
            </div>
        );
    }
}
