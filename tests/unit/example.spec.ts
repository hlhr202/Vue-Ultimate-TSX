import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";

describe("HelloWorld.vue", () => {
    it("renders props.me when passed", () => {
        const me = "new message";
        const wrapper = shallowMount(Home, {
            propsData: { me }
        });
        expect(wrapper.element.querySelector(".me")!.textContent).toMatch(me);
    });
});
