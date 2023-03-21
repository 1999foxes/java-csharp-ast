package org.javaAst;
public class Main {
    public static void main(java.lang.String[] args) {
        spoon.Launcher l = new spoon.Launcher();
        l.getEnvironment().setNoClasspath(true);
        l.addInputResource("src/main/java");
        l.addProcessor(new org.javaAst.ClassProcessor());
        l.run();
    }
}