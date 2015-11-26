#pragma strict

public var canRotate : boolean = true;

@SerializeField()
private var target : Transform;

function Start () {

}

function Update () {
	transform.position = target.position;
	if (canRotate) transform.rotation = target.rotation;
}