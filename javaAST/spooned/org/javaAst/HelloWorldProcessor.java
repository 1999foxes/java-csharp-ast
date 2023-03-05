package org.javaAst;
/**
 * outputs hello world by self compile-time introspection
 */
public class HelloWorldProcessor extends spoon.processing.AbstractManualProcessor {
    @java.lang.Override
    public void process() {
        java.lang.System.out.println(getFactory().Class().get(getClass().getCanonicalName()).getField("msg").getDefaultExpression());
    }

    java.lang.String msg = "hello world";
}