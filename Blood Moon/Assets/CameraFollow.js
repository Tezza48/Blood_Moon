#pragma strict

@SerializeField()
private var target : Transform;

function Start () {

}

function Update () {
	transform.position = target.position;
}