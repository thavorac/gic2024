@extends('layouts.app')

@section('title', 'Task List')

@section('content')
    <section class="vh-100" style="background-color: #eee;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
                <div class="card rounded-3">
                <div class="card-body p-4">
        
                    <h4 class="text-center my-3 pb-3">To Do App</h4>
        
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">New Task</button>
        
                    <table class="table mb-4">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($tasks as $task)
                            <tr>
                                <th scope="row">1</th>
                                <td>{{$task->title}}</td>
                                <td>
                                    @if ($task->is_completed)
                                        <span>Done</span>
                                    @else
                                        <span>In Progress</span>
                                    @endif
                                </td>
                                <td>
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger">Delete</button>
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-success ms-1">Finished</button>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    @endsection

