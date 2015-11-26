#pragma strict

private var _GameController : GameController;
private var gravityPos : Vector3;
private var moon : Transform;
private var moveSpeed : float = 10;
private var rigid : Rigidbody2D;

function Start () {
	_GameController = GameObject.Find("GameController").GetComponent.<GameController>();
	moon = GameObject.FindGameObjectWithTag("Moon").GetComponent.<Transform>();
	rigid = GetComponent.<Rigidbody2D>();
}

function FixedUpdate () {
	ApplyGravity();
	ApplyRotation();
	
	var moveVector : Vector2 = new Vector2(Input.GetAxis("Horizontal") * moveSpeed, 0);
	
	rigid.AddForce(moveVector);
}

function ApplyGravity () {
	gravityPos = moon.position - transform.position;
	rigid.AddForce(gravityPos.normalized * _GameController.gravity);
}

function ApplyRotation () {
	transform.rotation.z = 180 - Mathf.Asin(gravityPos.y / gravityPos.x);
}