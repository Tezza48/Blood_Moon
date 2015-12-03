#pragma strict

public static var instance : GameController;
public static var gravity : float = 9.81;

function Start () {
	if (instance == null) {
		instance = this;
	} else {
		Destroy(this.gameObject);
	}
}

function Update () {

}