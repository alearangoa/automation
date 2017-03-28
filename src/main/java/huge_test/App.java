package main.java.aleja.huge_test;

/**
 * Hello world!
 *
 */
public class App 
{
	String comentario="global";
	
    public void vaina(String comentario)
    {
    	comentario = "local";
    	
        System.out.println( " CONTENIDO VARIABLE1 "+comentario );
        comentario = this.comentario; 
        System.out.println( " CONTENIDO VARIABLE2 " );
    }
}
