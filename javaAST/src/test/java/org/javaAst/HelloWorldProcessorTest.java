package org.javaAst;

import org.junit.jupiter.api.Test;
import spoon.Launcher;

class HelloWorldProcessorTest {
    @Test
    void test() {
        Launcher l = new Launcher();
        l.getEnvironment().setNoClasspath(true);
        l.addInputResource("src/main/java");
        l.addProcessor(new HelloWorldProcessor());
        l.run();
    }

    void empty() {}
}