package org.javaAst;

import spoon.Launcher;

public class Main {
    public static void main(String[] args) {
        Launcher l = new Launcher();
        l.getEnvironment().setNoClasspath(true);
        l.addInputResource("src/main/java");
        l.addProcessor(new ClassProcessor());
        l.run();
    }
}