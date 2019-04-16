import { Component as VueComponent } from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import TestScopedSlot from "../components/TestScopedSlot";

@Component
export default class About extends VueComponent<{}> {
    render() {
        return (
            <div>
                <TestScopedSlot
                    what="what the fuck"
                    scopedSlots={{
                        dafuq: props =>
                            !!props && <div>{props.data + "!!!"}</div>,
                        dafuqfuq: props =>
                            !!props && <div>{props.data + "~~~"}</div>
                    }}
                />
            </div>
        );
    }
}
